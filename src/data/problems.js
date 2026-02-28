const problems = [
    // 1-5: 基本的な構文
    { id: 1, category: "基本的な構文", title: "出力（基本）", description: "Logger.log を使って \"Hello, World!\" を出力してください。", sample: "function q1() {\n  // ここに記入\n}", answer: "function q1() {\n  Logger.log(\"Hello, World!\");\n}" },
    { id: 2, category: "基本的な構文", title: "出力（複数行）", description: "Logger.log を複数回使って、1、2、3 を順番に出力してください。", sample: "function q2() {\n  // ここに記入\n}", answer: "function q2() {\n  Logger.log(1);\n  Logger.log(2);\n  Logger.log(3);\n}" },
    { id: 3, category: "基本的な構文", title: "出力（複数項目）", description: "Logger.log を使って、数値 123 と文字列 \"Hello\" を連結して出力してください。", sample: "function q3() {\n  // ここに記入\n}", answer: "function q3() {\n  Logger.log(123 + \" Hello\");\n}" },
    { id: 4, category: "基本的な構文", title: "コメント", description: "1行コメントを使って、数値 2 の出力を行わないように修正してください。", sample: "function q4() {\n  Logger.log(1);\n  Logger.log(2);\n  Logger.log(3);\n}", answer: "function q4() {\n  Logger.log(1);\n  // Logger.log(2);\n  Logger.log(3);\n}" },
    { id: 5, category: "基本的な構文", title: "複数行コメント", description: "複数行コメントを使って、全ての出力をコメントアウトしてください。", sample: "function q5() {\n  Logger.log(1);\n  Logger.log(2);\n  Logger.log(3);\n}", answer: "function q5() {\n  /*\n  Logger.log(1);\n  Logger.log(2);\n  Logger.log(3);\n  */\n}" },

    // 6-17: 変数とデータ型
    { id: 6, category: "変数とデータ型", title: "変数の宣言と使用", description: "変数 x に数値 10 を代入し、その値を Logger.log で出力してください。", sample: "function q6() {\n  // ここに記入\n}", answer: "function q6() {\n  let x = 10;\n  Logger.log(x);\n}" },
    { id: 7, category: "変数とデータ型", title: "数値の加算", description: "数値 1 と 2 を足した結果を変数 x に代入し、出力してください。", sample: "function q7() {\n  // ここに記入\n}", answer: "function q7() {\n  let x = 1 + 2;\n  Logger.log(x);\n}" },
    { id: 8, category: "変数とデータ型", title: "文字列の加算", description: "文字列 \"1\" と \"2\" を結合した結果を変数 x に代入し、出力してください。", sample: "function q8() {\n  // ここに記入\n}", answer: "function q8() {\n  let x = \"1\" + \"2\";\n  Logger.log(x);\n}" },
    { id: 9, category: "変数とデータ型", title: "データ型の変換", description: "数値 10 を文字列に、文字列 '10' を数値に変換して出力してください。", sample: "function q9() {\n  // ここに記入\n}", answer: "function q9() {\n  Logger.log(String(10));\n  Logger.log(Number('10'));\n}" },
    { id: 10, category: "変数とデータ型", title: "エスケープシーケンス", description: "改行コード \\n を使って \"1\\n2\\n3\" を出力してください。", sample: "function q10() {\n  // ここに記入\n}", answer: "function q10() {\n  Logger.log(\"1\\n2\\n3\");\n}" },
    { id: 11, category: "変数とデータ型", title: "特殊文字のエスケープ", description: "\"C:\\\\test\" を出力するために、バックスラッシュをエスケープしてください。", sample: "function q11() {\n  // ここに記入\n}", answer: "function q11() {\n  Logger.log(\"C:\\\\test\");\n}" },
    { id: 13, category: "変数とデータ型", title: "テンプレートリテラルの使用", description: "変数 name に \"GAS\" を代入し、テンプレートリテラルで \"Hello, GAS!\" と出力してください。", sample: "function q13() {\n  // ここに記入\n}", answer: "function q13() {\n  const name = \"GAS\";\n  Logger.log(`Hello, ${name}!`);\n}" },
    { id: 14, category: "変数とデータ型", title: "文字列の長さ", description: "\"Python\" の文字数を .length を使って出力してください。", sample: "function q14() {\n  // ここに記入\n}", answer: "function q14() {\n  Logger.log(\"Python\".length);\n}" },
    { id: 15, category: "変数とデータ型", title: "部分文字列の抽出", description: "\"Python\" の最初の2文字を slice で抽出して出力してください。", sample: "function q15() {\n  // ここに記入\n}", answer: "function q15() {\n  const str = \"Python\";\n  Logger.log(str.slice(0, 2));\n}" },
    { id: 16, category: "変数とデータ型", title: "null の使用", description: "変数に null を代入し、その値を出力してください。", sample: "function q16() {\n  // ここに記入\n}", answer: "function q16() {\n  const x = null;\n  Logger.log(x);\n}" },
    { id: 17, category: "変数とデータ型", title: "データ型の確認", description: "typeof を使って 10, 3.14, \"Hello\", true の型を確認してください。", sample: "function q17() {\n  // ここに記入\n}", answer: "function q17() {\n  Logger.log(typeof 10);\n  Logger.log(typeof 3.14);\n  Logger.log(typeof \"Hello\");\n  Logger.log(typeof true);\n}" },

    // 18-23: リスト操作（配列）
    { id: 18, category: "リスト操作", title: "配列の作成", description: "配列 [1, 2, 3] を作成し、最初の要素を出力してください。", sample: "function q18() {\n  // ここに記入\n}", answer: "function q18() {\n  const arr = [1, 2, 3];\n  Logger.log(arr[0]);\n}" },
    { id: 19, category: "リスト操作", title: "配列のスライス", description: "[1, 2, 3] の最初の2項目を slice で取得してください。", sample: "function q19() {\n  // ここに記入\n}", answer: "function q19() {\n  const arr = [1, 2, 3];\n  Logger.log(arr.slice(0, 2));\n}" },
    { id: 20, category: "リスト操作", title: "要素の追加", description: "[1, 2, 3] に push で 4 を追加してください。", sample: "function q20() {\n  // ここに記入\n}", answer: "function q20() {\n  const arr = [1, 2, 3];\n  arr.push(4);\n  Logger.log(arr);\n}" },
    { id: 21, category: "リスト操作", title: "配列の長さ", description: "[1, 2, 3] の要素数を .length で取得してください。", sample: "function q21() {\n  // ここに記入\n}", answer: "function q21() {\n  const arr = [1, 2, 3];\n  Logger.log(arr.length);\n}" },
    { id: 22, category: "リスト操作", title: "要素の削除", description: "splice を使い、[1, 2, 3] から 2 を削除してください。", sample: "function q22() {\n  // ここに記入\n}", answer: "function q22() {\n  const arr = [1, 2, 3];\n  arr.splice(1, 1);\n  Logger.log(arr);\n}" },
    { id: 23, category: "リスト操作", title: "配列の結合", description: "[1, 2] と [3, 4] を concat で結合してください。", sample: "function q23() {\n  // ここに記入\n}", answer: "function q23() {\n  const a = [1, 2];\n  const b = [3, 4];\n  Logger.log(a.concat(b));\n}" },

    // 24-35: 条件分岐とループ
    { id: 24, category: "条件分岐とループ", title: "if 文", description: "x = 15 とし、10より大きい場合にメッセージを出してください。", sample: "function q24() {\n  // ここに記入\n}", answer: "function q24() {\n  const x = 15;\n  if (x > 10) Logger.log(\"xは10より大きい\");\n}" },
    { id: 25, category: "条件分岐とループ", title: "else if / else", description: "x = 10 とし、値に応じて3段階で判定してください。", sample: "function q25() {\n  // ここに記入\n}", answer: "function q25() {\n  const x = 10;\n  if (x > 10) Logger.log(\"10より大\");\n  else if (x > 5) Logger.log(\"5より大10以下\");\n  else Logger.log(\"5以下\");\n}" },
    { id: 31, category: "条件分岐とループ", title: "for...of ループ", description: "[1, 2, 3] の各要素を順番に表示してください。", sample: "function q31() {\n  // ここに記入\n}", answer: "function q31() {\n  for (const v of [1, 2, 3]) Logger.log(v);\n}" },
    { id: 32, category: "条件分岐とループ", title: "for カウントアップ", description: "0から9までをループで出力してください。", sample: "function q32() {\n  // ここに記入\n}", answer: "function q32() {\n  for (let i = 0; i < 10; i++) Logger.log(i);\n}" },
    { id: 33, category: "条件分岐とループ", title: "break の使用", description: "ループ内で i が 5 になったら終了してください。", sample: "function q33() {\n  // ここに記入\n}", answer: "function q33() {\n  for (let i = 0; i < 10; i++) {\n    if (i === 5) break;\n    Logger.log(i);\n  }\n}" },
    { id: 34, category: "条件分岐とループ", title: "continue の使用", description: "ループ内で i が 5 の時だけ処理をスキップしてください。", sample: "function q34() {\n  // ここに記入\n}", answer: "function q34() {\n  for (let i = 0; i < 10; i++) {\n    if (i === 5) continue;\n    Logger.log(i);\n  }\n}" },
    { id: 35, category: "条件分岐とループ", title: "while ループ", description: "10から1までカウントダウンしてください。", sample: "function q35() {\n  // ここに記入\n}", answer: "function q35() {\n  let i = 10;\n  while (i > 0) {\n    Logger.log(i);\n    i--;\n  }\n}" },

    // 41-43: オブジェクト（辞書）
    { id: 41, category: "データ構造", title: "オブジェクトの操作", description: "{id: '001', name: 'guest'} から name を取得してください。", sample: "function q41() {\n  // ここに記入\n}", answer: "function q41() {\n  const obj = {id: '001', name: 'guest'};\n  Logger.log(obj.name);\n}" },
    { id: 42, category: "データ構造", title: "キーと値の列挙", description: "Object.entries を使い、オブジェクトの全ペアを表示してください。", sample: "function q42() {\n  // ここに記入\n}", answer: "function q42() {\n  const obj = {id: '001', name: 'guest'};\n  for (const [k, v] of Object.entries(obj)) Logger.log(`${k}: ${v}`);\n}" },
    { id: 43, category: "データ構造", title: "filter の使用", description: "1から10未満の数のうち、偶数だけを抽出した配列を作ってください。", sample: "function q43() {\n  // ここに記入\n}", answer: "function q43() {\n  const res = [1,2,3,4,5,6,7,8,9].filter(n => n % 2 === 0);\n  Logger.log(res);\n}" },

    // 61-68: 関数とクラス
    { id: 61, category: "関数", title: "関数の定義", description: "\"Hello World\" を出す関数を3回呼び出してください。", sample: "function q61() {\n  // ここに記入\n}", answer: "function q61() {\n  const sample = () => Logger.log(\"Hello World\");\n  sample(); sample(); sample();\n}" },
    { id: 62, category: "関数", title: "引数付き関数", description: "名前を受け取り \"こんにちは、〇〇 さん\" と出す関数を作ってください。", sample: "function q62() {\n  // ここに記入\n}", answer: "function q62() {\n  const greet = (name) => Logger.log(`こんにちは、${name} さん`);\n  greet(\"テスト\");\n}" },
    { id: 63, category: "関数", title: "戻り値", description: "2つの引数の和を返す関数を作ってください。", sample: "function q63() {\n  // ここに記入\n}", answer: "function q63() {\n  const add = (a, b) => a + b;\n  Logger.log(add(1, 2));\n}" },
    { id: 66, category: "クラス", title: "クラスの作成", description: "名前を受け取り作成ログを出す SimpleClass を定義してください。", sample: "function q66() {\n  // ここに記入\n}", answer: "function q66() {\n  class SimpleClass {\n    constructor(name) {\n      Logger.log(`名前が ${name} のオブジェクトを作成しました`);\n    }\n  }\n  new SimpleClass(\"サンプル\");\n}" },

    // 91-100: 実践
    { id: 91, category: "実践", title: "九九×ファイル(ログ)", description: "九九の結果に 3 が含まれる式だけを表示してください。", sample: "function q91() {\n  // ここに記入\n}", answer: "function q91() {\n  for (let i = 1; i <= 9; i++) {\n    for (let j = 1; j <= 9; j++) {\n      const res = i * j;\n      if (String(res).includes('3')) Logger.log(`${i} × ${j} = ${res}`);\n    }\n  }\n}" },
    { id: 95, category: "実践", title: "文字列の抽出", description: "4文字以内の単語だけを抽出してください。", sample: "function q95() {\n  const text = 'Python is a programming language';\n  // ここに記入\n}", answer: "function q95() {\n  const text = 'Python is a programming language';\n  text.split(' ').filter(w => w.length <= 4).forEach(w => Logger.log(w));\n}" },
    { id: 100, category: "実践", title: "CSVデータの検索", description: "Utilities.parseCsv でCSVを解析し、特定の条件に合う ID を出してください。", sample: "function q100() {\n  const csv = \"user_id,op\\n001,A\\n002,B\";\n  // ここに記入\n}", answer: "function q100() {\n  const csv = \"user_id,op\\n001,A\\n002,B\";\n  const rows = Utilities.parseCsv(csv);\n  rows.slice(1).forEach(r => { if(r[1] === 'B') Logger.log(r[0]); });\n}" }
];

// Fill all missing 100 problems with translated Python descriptions
const pythonBasedProblemsMap = {
    26: { title: "比較演算子", desc: "大小関係 (>, >=, ===, <=, <) の結果を出力してください。" },
    27: { title: "包含関係", desc: "includes を使い、[1, 2, 3] に 2 が含まれるか確認してください。" },
    28: { title: "null 判定", desc: "=== null を使い、変数が null かどうか判定してください。" },
    29: { title: "論理演算子", desc: "&& や || を使い、複数の条件を判定してください。" },
    30: { title: "論理否定", desc: "! を使い、値が null でないことを判定してください。" },
    36: { title: "タプル相当 (配列)", desc: "[1, 2, 3] を作り、最初の要素を出力してください。" },
    37: { title: "配列の結合と長さ", desc: "2つの配列を結合し、その長さを出力してください。" },
    38: { title: "Set の使用", desc: "new Set() で集合を作り、要素を追加・削除してください。" },
    39: { title: "Set の演算", desc: "2つの Set から和集合や共通部分（filter等）を作成してください。" },
    40: { title: "Set のループ", desc: "for...of で Set の中身を順番に出力してください。" },
    44: { title: "文字列の置換", desc: "replace を使い、\",\" を \"&\" に置換してください。" },
    45: { title: "分割と結合", desc: "split と join を使い、文字列を加工してください。" },
    46: { title: "数値計算（詳細）", desc: "積、商、整数部分（Math.floor）、余りを出力してください。" },
    47: { title: "Math.max の使用", desc: "[1, 2, 3] の中から最大値を見つけてください。" },
    49: { title: "型の例外検知", desc: "nullを2倍しようとした時のエラーを catch してください。" },
    50: { title: "カスタムエラー", desc: "負の値の時に throw new Error で例外を投げてください。" },
    51: { title: "九九の出力", desc: "2重ループで九九の表を Logger.log で出してください。" },
    52: { title: "3を含む数の抽出", desc: "100未満で「3」が付く数字をすべて表示してください。" },
    53: { title: "100個の抽出", desc: "3が付く数字を小さい方から100個表示してください。" },
    54: { title: "2次元配列の操作", desc: "3x3の配列をすべて2倍にしてください。" },
    55: { title: "2次元配列の作成", desc: "10x10のグリッド配列を作成してください。" },
    56: { title: "逆引きオブジェクト", desc: "キーと値を入れ替えた新しいオブジェクトを作ってください。" },
    57: { title: "文字カウント", desc: "\"hello\" の各文字が何回出たか数えてください。" },
    58: { title: "None除外と結合", desc: "[1, null, 2] から null を除いて \"&\" で繋いでください。" },
    59: { title: "配列ループとエラー", desc: "ループ内でエラーが起きても catch して続行してください。" },
    60: { title: "オブジェクトのリスト検索", desc: "特定IDに一致する社員の情報を抽出してください。" },
    // ... (Adding major ones manually, others will be auto-generated with titles)
};

const fullSet = [];
const existingIds = new Set(problems.map(p => p.id));

for (let i = 1; i <= 100; i++) {
    if (existingIds.has(i)) {
        fullSet.push(problems.find(p => p.id === i));
    } else {
        const meta = pythonBasedProblemsMap[i] || {
            title: `課題 ${i}`,
            desc: `Python Knock ${i} の内容をGAS(JS)で実装する課題です。`
        };
        fullSet.push({
            id: i,
            category: i <= 50 ? "前半編" : "後半編",
            title: meta.title,
            description: meta.desc,
            sample: `function q${i}() {\n  // ここに記入\n}`,
            answer: `function q${i}() {\n  // Answer code here\n}`
        });
    }
}

fullSet.sort((a, b) => a.id - b.id);

export default fullSet;
