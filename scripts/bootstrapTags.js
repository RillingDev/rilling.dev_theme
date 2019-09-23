const TAG_LIMIT = 3;

const listTagsHelper = function (tags) {

    if (!tags || !tags.length) return '';

    let result = '';

    // Sort the tags
    tags = tags.sort('name', 1);

    // Ignore tags with zero posts
    tags = tags.filter(tag => tag.length);

    // Limit the number of tags
    tags = tags.limit(TAG_LIMIT);

    result+="<ul class='meta-tag-list'>";

    tags.forEach(tag=>{
        result += `<li class='meta-tag-item'>`;
        result +=  tag.name;
        result += '</li>';
    });

    result+="</ul>";

    return result;
};


hexo.extend.helper.register('bootstrap_tags', listTagsHelper);
