module.exports.addFaq = async (body) => {
    
    try {
              let data = await dbHelper.create(Model.Faq, body)
              if (!data) throw new Error(" faq not found");
              return { data: data, message: "create successfully" };

    } catch (err) {
        throw err
    }
}
module.exports.getFaq=async(query)=>{
    try {
        let { page, limit } = query
        page = parseInt(page);
        limit = parseInt(limit);
        let skip = (page - 1) * limit;
        let qry={isDeleted:false}
        let data = await dbHelper.find(Model.Faq, qry, {}, { skip, limit })
        let total = await dbHelper.countDocuments(Model.Faq, { isDeleted: false })

        let result = {
            data: data, currentPage: page, totalPages: Math.ceil(total / limit), totalRecords: total,
        }
        return {
            data: result, message: "getAllFaq"
        };   

    } catch (err) {
        throw err
    }

}
module.exports.updateFaq = async (body) => {
    try {
            let data = await dbHelper.findOneAndUpdate(Model.Faq, {
            _id: body.faqId, isDeleted: false
        }, body, { new: true })
        if (!data) throw new Error("faq not found");
        return { data: data, message: "update successfully" };
    }
    catch (err) {
        throw err
    }
}
module.exports.deleteFaq=async(body)=>{
    try {
        let data = await dbHelper.findOneAndUpdate(Model.Faq, { _id: body.faqId, isDeleted: false },
            { isDeleted: true }, { new: true })
        if (!data) throw new Error("Id not found");
        return { data: data, message: "delete successfully" };
    } catch (err) {
        throw err
    }
}