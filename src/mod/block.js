import { split, storage } from "./common.js";

export let initBlock = () => {
    let getBlockAll = () => {
        let json = storage?.getItem('block_all');
        if (!json) return {
            on: 1,
            word: '',
            id: '',
            nick: '',
            ip: '',
        };
        return JSON.parse(json);
    };
    let getBlockParts = () => {
        let json = storage?.getItem('block_parts');
        if (!json) return {};
        return JSON.parse(json);
    };
    let getBlockGall = (id, name) => getBlockParts()[id] ?? {
        on: 1,
        word: '',
        id: '',
        nick: '',
        ip: '',
        name: name,
    };
    let setBlockAll = (o) => storage?.setItem('block_all', JSON.stringify(o));
    let setBlockParts = (o) => storage?.setItem('block_parts', JSON.stringify(o));
    
    let isBlocked = (postData, blockData) => {
        if (!blockData.on) return false;
        return _isBlocked(postData, 'title', blockData, 'word', true)
            || _isBlocked(postData, 'nickname', blockData, 'nick')
            || _isBlocked(postData, 'id', blockData, 'id')
            || _isBlocked(postData, 'ip', blockData, 'ip');
    }
    let _isBlocked = (postData, key, blockData, id, include = false) => {
        if (!blockData[id]) return false;
        let splits = split(blockData[id]);
        for (let split of splits) {
            if (include) {
                if (postData[key].includes(split)) return true;
            } else {
                if (postData[key] == split) return true;
            }
        }
        return false;
    };
    let updateBlockAll = (o) => {
        o.on = 1;
        setBlockAll(o);
        for (let line of chatLines) {
            if (isBlocked(line, o)) addClass(line.chat, 'block');
            else removeClass(line.chat, 'block');
        }
    }
    let updateBlockGall = (o, id) => {
        o.on = 1;
        let blockParts = getBlockParts();
        blockParts[id] = o;
        setBlockParts(blockParts);
        for (let line of chatLines) {
            if (isBlocked(line, o)) addClass(line.chat, 'block');
            else removeClass(line.chat, 'block');
        }
    }
    let addBlock = (o, key, keyword) => {
        let splits = split(o[key]).filter(t => t != '');
        if (!splits.includes(keyword)) splits.push(keyword);
        o[key] = splits.join('||');
    }
    let removeBlock = (o, key, keyword) => {
        let splits = split(o[key]).filter(t => t != '');
        for (let i = 0; i < splits.length; i++) {
            let split = splits[i];
            if (split == keyword) {
                splits.splice(i, 1);
                break;
            }
        }
        o[key] = splits.join('||');
    }

    return {
        getBlockAll,
        getBlockGall,
        isBlocked,
        updateBlockAll,
        updateBlockGall,
        addBlock,
        removeBlock
    };
};

export let {
    getBlockAll,
    getBlockGall,
    isBlocked,
    updateBlockAll,
    updateBlockGall,
    addBlock,
    removeBlock
} = initBlock();