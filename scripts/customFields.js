const getCustomPageData = (page) => {
    const data = page.data;

    if (!data) {
        throw new Error(`Could not find page data.`);
    }

    return data;
};

hexo.extend.helper.register("get_custom_page_data", getCustomPageData);
