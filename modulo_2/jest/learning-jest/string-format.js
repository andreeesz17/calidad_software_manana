function truncate(
    str,
    count,
    whithEllipsis
) {
    if (str.length <= count) {
        return str;
    }
    const substring = str.slice(0, count);
    if (whithEllipsis)
        return substring + '...';
    return substring + '...';

}
module.exports = { truncate };