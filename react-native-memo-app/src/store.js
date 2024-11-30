import AsyncStorage from "@react-native-async-storage/async-storage";

// 保存処理
export const save = async (text, createdAt) => {
    // キー作成
    const key = `${createdAt}`;
    // 保存情報
    const value = JSON.stringify({
        text, createdAt
    });
    // 保存
    await AsyncStorage.setItem(key, value);
};

// 読み込み処理
export const loadAll = async () => {
    // 全てのキーを取得
    const keys = await AsyncStorage.getAllKeys();

    // ソート
    keys.sort();

    // 全件取得
    const entryList = await AsyncStorage.multiGet(keys);

    // 内容を取得
    return entryList.map(entry => JSON.parse(entry[1]));
};