function reverseLinkList(first) {
    let prev = null;
    let cur = first;
    while (cur) {
        const next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    return prev;
};
