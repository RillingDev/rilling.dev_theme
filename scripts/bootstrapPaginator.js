/*
* Based on Hexo's paginatorHelper adjusted for some bootstrap stuff.
 */
const paginatorHelper = function () {
    const current = this.page.current || 0;
    const total = this.page.total || 1;
    const base = this.page.base || '';
    const format = `${this.config.pagination_dir}/%d/`;

    if (!current) return '';

    const currentPage = `<li class="page-item active"><span class="page-link">${current}</span></li>`;

    const link = i => this.url_for(i === 1 ? base : base + format.replace('%d', i));

    const pageLink = i => `<li class="page-item"><a class="page-link" href="${link(i)}">${i}</a></li>`;

    let result = "";

    // Display pages on the left side of the current page
    for (let i = 1; i < current; i++) {
        result += pageLink(i);
    }

    // Display the current page
    result += currentPage;

    // Display pages on the right side of the current page
    for (let i = current + 1; i <= total; i++) {
        result += pageLink(i);
    }

    return result;
};


hexo.extend.helper.register('bootstrap_paginator', paginatorHelper);
