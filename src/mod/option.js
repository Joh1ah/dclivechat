import { storage } from "./common.js";
import { appName } from "./constant.js";

export let initOptions = (appName) => {
    let _saveData = {};
    let onApplyFunc = {};
    let saveOptions = (override) => {
        let string = JSON.stringify(override ?? _saveData);
        storage?.setItem(appName, string);
    };
    let _applyOption = (optionKey, value) => {
        _saveData[optionKey] = value;
        onApplyFunc[optionKey]?.(value);
    };
    let applyOption = (optionKey, value) => {
        _applyOption(optionKey, value);
        saveOptions();
    };
    let getOption = (optionKey) => {
        return _saveData[optionKey] ?? null;
    }
    let loadOptions = () => {
        let string = storage?.getItem(appName) ?? '';
        if (!string) return;
        _saveData = JSON.parse(string);
        for (let key in _saveData) _applyOption(key, _saveData[key]);
    };
    let clearSaveData = () => {
        _saveData = {};
        saveOptions();
    };
    return {
        onApplyFunc,
        applyOption,
        getOption,
        loadOptions,
        clearSaveData
    };
}

// export let {
//     onApplyFunc,
//     applyOption,
//     getOption,
//     loadOptions,
//     clearSaveData
// } = initOptions(appName);