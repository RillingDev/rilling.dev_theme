const findCustomField = (page, field, fallback = null) => {
    const val = page[field];

    if (!val) {
        if(fallback!=null){
            return fallback;
        }

        throw new Error(`Could not find field '${field}'`);
    }

    return val;
};

hexo.extend.helper.register('custom_field', findCustomField);
