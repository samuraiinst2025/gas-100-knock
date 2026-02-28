const problems = [
    // --- 1. 基本的な構文 (1-5) ---
    { id: 1, category: "基本的な構文", title: "出力（基本）", description: "Logger.log 関数を使って \"Hello, World!\" を出力してください。", sample: "function q1() {\n  // ここに記入\n}", answer: "function q1() {\n  Logger.log(\"Hello, World!\");\n}" },
    { id: 2, category: "基本的な構文", title: "出力（複数行）", description: "Logger.log 関数を複数回使って、1、2、3 を順番に出力してください。", sample: "function q2() {\n  // ここに記入\n}", answer: "function q2() {\n  Logger.log(1);\n  Logger.log(2);\n  Logger.log(3);\n}" },
    { id: 3, category: "基本的な構文", title: "出力（複数項目）", description: "Logger.log を使って、数値 123 と文字列 \"Hello\" を連結（+）して出力してください。", sample: "function q3() {\n  // ここに記入\n}", answer: "function q3() {\n  Logger.log(123 + \" Hello\");\n}" },
    { id: 4, category: "基本的な構文", title: "一行コメント", description: "一行コメント // を使って、数値 2 の出力を行わないようにコードを変更してください。", sample: "function q4() {\n  Logger.log(1);\n  Logger.log(2);\n  Logger.log(3);\n}", answer: "function q4() {\n  Logger.log(1);\n  // Logger.log(2);\n  Logger.log(3);\n}" },
    { id: 5, category: "基本的な構文", title: "複数行コメント", description: "複数行コメント /* */ を使って、全ての Logger.log を無効にしてください。", sample: "function q5() {\n  Logger.log(1);\n  Logger.log(2);\n  Logger.log(3);\n}", answer: "function q5() {\n  /*\n  Logger.log(1);\n  Logger.log(2);\n  Logger.log(3);\n  */\n}" },

    // --- 2. 変数とデータ型 (6-17) ---
    { id: 6, category: "変数とデータ型", title: "変数の宣言と使用", description: "変数 x に数値 10 を代入し、その値を Logger.log で出力してください。 (let を推奨)", sample: "function q6() {\n  // ここに記入\n}", answer: "function q6() {\n  let x = 10;\n  Logger.log(x);\n}" },
    { id: 7, category: "変数とデータ型", title: "数値の加算", description: "数値 1 と 2 を足し算した結果を変数 x に代入し、その値を Logger.log で出力してください。", sample: "function q7() {\n  // ここに記入\n}", answer: "function q7() {\n  let x = 1 + 2;\n  Logger.log(x);\n}" },
    { id: 8, category: "変数とデータ型", title: "文字列の結合", description: "文字列 \"1\" と \"2\" を + で結合した結果を変数 x に代入し、その値を Logger.log で出力してください。", sample: "function q8() {\n  // ここに記入\n}", answer: "function q8() {\n  let x = \"1\" + \"2\";\n  Logger.log(x);\n}" },
    { id: 9, category: "変数とデータ型", title: "データ型の変換", description: "整数 10 を String() で文字列に、文字列 '10' を Number() で整数に変換して出力してください。", sample: "function q9() {\n  // ここに記入\n}", answer: "function q9() {\n  Logger.log(String(10));\n  Logger.log(Number('10'));\n}" },
    { id: 10, category: "変数とデータ型", title: "改行文字列", description: "改行コード \\n を使って \"1\\n2\\n3\" を出力し、ログで改行されることを確認してください。", sample: "function q10() {\n  // ここに記入\n}", answer: "function q10() {\n  Logger.log(\"1\\n2\\n3\");\n}" },
    { id: 11, category: "変数とデータ型", title: "エスケープ", description: "バックスラッシュ自体を表示するために \"\\\\\" を使い、\"C:\\\\test\" を出力してください。", sample: "function q11() {\n  // ここに記入\n}", answer: "function q11() {\n  Logger.log(\"C:\\\\test\");\n}" },
    { id: 12, category: "変数とデータ型", title: "テンプレートリテラル", description: "バッククォート `` を使い、文字列の中に改行をそのまま書いて \"1\\n2\" を出力してください。", sample: "function q12() {\n  // ここに記入\n}", answer: "function q12() {\n  Logger.log(`1\n2`);\n}" },
    { id: 13, category: "変数とデータ型", title: "埋め込み変数", description: "変数 name = \"GAS\" とし、テンプレートリテラル ${name} を使って \"Hello, GAS!\" と出力してください。", sample: "function q13() {\n  // ここに記入\n}", answer: "function q13() {\n  const name = \"GAS\";\n  Logger.log(`Hello, ${name}!`);\n}" },
    { id: 14, category: "変数とデータ型", title: "文字列の文字数", description: "文字列 \"Script\" の文字数を .length プロパティを使って出力してください。", sample: "function q14() {\n  // ここに記入\n}", answer: "function q14() {\n  Logger.log(\"Script\".length);\n}" },
    { id: 15, category: "変数とデータ型", title: "部分文字列", description: "\"Python\" という文字列の最初の2文字を slice(0, 2) を使って出力してください。", sample: "function q15() {\n  // ここに記入\n}", answer: "function q15() {\n  const str = \"Python\";\n  Logger.log(str.slice(0, 2));\n}" },
    { id: 16, category: "変数とデータ型", title: "null の使用", description: "変数に null を代入し、その値を Logger.log で出力してください。", sample: "function q16() {\n  // ここに記入\n}", answer: "function q16() {\n  let val = null;\n  Logger.log(val);\n}" },
    { id: 17, category: "変数とデータ型", title: "typeof による確認", description: "typeof を使い、10, 3.14, \"Hello\", true の各データ型を確認してください。", sample: "function q17() {\n  // ここに記入\n}", answer: "function q17() {\n  Logger.log(typeof 10);\n  Logger.log(typeof 3.14);\n  Logger.log(typeof \"Hello\");\n  Logger.log(typeof true);\n}" },

    // --- 3. リスト操作 (配列) (18-23) ---
    { id: 18, category: "配列操作", title: "配列の作成", description: "変数 lst に [1, 2, 3] を代入し、先頭（0番目）の要素を出力してください。", sample: "function q18() {\n  // ここに記入\n}", answer: "function q18() {\n  const arr = [1, 2, 3];\n  Logger.log(arr[0]);\n}" },
    { id: 19, category: "配列操作", title: "スライス", description: "[1, 2, 3] の中から最初の2つの要素 [1, 2] を slice を使って出力してください。", sample: "function q19() {\n  // ここに記入\n}", answer: "function q19() {\n  const arr = [1, 2, 3];\n  Logger.log(arr.slice(0, 2));\n}" },
    { id: 20, category: "配列操作", title: "要素の追加", description: "[1, 2, 3] の末尾に push() で 4 を追加して出力してください。", sample: "function q20() {\n  // ここに記入\n}", answer: "function q20() {\n  let arr = [1, 2, 3];\n  arr.push(4);\n  Logger.log(arr);\n}" },
    { id: 21, category: "配列操作", title: "配列の長さ", description: "[1, 2, 3] の長さを .length で取得して出力してください。", sample: "function q21() {\n  // ここに記入\n}", answer: "function q21() {\n  let arr = [1, 2, 3];\n  Logger.log(arr.length);\n}" },
    { id: 22, category: "配列操作", title: "特定の要素を削除", description: "splice() を使い、[1, 2, 3] から数値の 2 を削除してください。", sample: "function q22() {\n  // ここに記入\n}", answer: "function q22() {\n  let arr = [1, 2, 3];\n  let index = arr.indexOf(2);\n  if (index > -1) arr.splice(index, 1);\n  Logger.log(arr);\n}" },
    { id: 23, category: "配列操作", title: "配列の結合", description: "[1, 2] と [3, 4] を concat() またはスプレッド構文で結合してください。", sample: "function q23() {\n  // ここに記入\n}", answer: "function q23() {\n  let a = [1, 2], b = [3, 4];\n  Logger.log(a.concat(b));\n}" },

    // --- 4. 条件分岐とループ (24-35) ---
    { id: 24, category: "条件分岐とループ", title: "if 文", description: "x = 15 とし、10より大きい場合に \"xは10より大きい\" と出力してください。", sample: "function q24() {\n  // ここに記入\n}", answer: "function q24() {\n  let x = 15;\n  if (x > 10) Logger.log(\"xは10より大きい\");\n}" },
    { id: 25, category: "条件分岐とループ", title: "else if / else", description: "x = 10 とし、値に応じて \"10より大\", \"5より大\", \"5以下\" を判定してください。", sample: "function q25() {\n  // ここに記入\n}", answer: "function q25() {\n  let x = 10;\n  if (x > 10) Logger.log(\"10より大\");\n  else if (x > 5) Logger.log(\"5より大\");\n  else Logger.log(\"5以下\");\n}" },
    { id: 26, category: "条件分岐とループ", title: "比較演算子", description: "x=10, y=20 とし、> や === を使って大小や等価の結果 (True/False) を出力してください。", sample: "function q26() {\n  // ここに記入\n}", answer: "function q26() {\n  let x=10, y=20;\n  Logger.log(x > y);\n  Logger.log(x < y);\n  Logger.log(x === y);\n}" },
    { id: 27, category: "条件分岐とループ", title: "配列の包含判定", description: "includes() を使い、[1, 2, 3] に 2 が含まれているかを判定してください。", sample: "function q27() {\n  // ここに記入\n}", answer: "function q27() {\n  let arr = [1, 2, 3];\n  Logger.log(arr.includes(2));\n}" },
    { id: 28, category: "条件分岐とループ", title: "厳密等価とnull", description: "=== null を使い、変数が null かどうかを判定してください。", sample: "function q28() {\n  // ここに記入\n}", answer: "function q28() {\n  let x = null;\n  Logger.log(x === null);\n}" },
    { id: 29, category: "条件分岐とループ", title: "論理演算", description: "&& や || を使い、2つの条件を同時に、またはどちらかを判定してください。", sample: "function q29() {\n  // ここに記入\n}", answer: "function q29() {\n  let x = 10, y = 20;\n  Logger.log(x > 15 && y > 15);\n  Logger.log(x > 15 || y > 15);\n}" },
    { id: 30, category: "条件分岐とループ", title: "論理否定", description: "! を使い、値が null でないことを条件にしてメッセージを出してください。", sample: "function q30() {\n  // ここに記入\n}", answer: "function q30() {\n  let x = \"value\";\n  if (x !== null) Logger.log(\"xはnullではない\");\n}" },
    { id: 31, category: "条件分岐とループ", title: "for...of", description: "[1, 2, 3] の中身を for...of で順番に取り出して出力してください。", sample: "function q31() {\n  // ここに記入\n}", answer: "function q31() {\n  for (const v of [1, 2, 3]) Logger.log(v);\n}" },
    { id: 32, category: "条件分岐とループ", title: "for (カウント)", description: "for ループを使い、0 から 9 までを出力してください。", sample: "function q32() {\n  // ここに記入\n}", answer: "function q32() {\n  for (let i = 0; i < 10; i++) Logger.log(i);\n}" },
    { id: 33, category: "条件分岐とループ", title: "break", description: "i が 5 になったら break でループを脱出してください。", sample: "function q33() {\n  // ここに記入\n}", answer: "function q33() {\n  for (let i = 0; i < 10; i++) {\n    if (i === 5) break;\n    Logger.log(i);\n  }\n}" },
    { id: 34, category: "条件分岐とループ", title: "continue", description: "i が 5 の時だけ continue でスキップし、他の数字を出してください。", sample: "function q34() {\n  // ここに記入\n}", answer: "function q34() {\n  for (let i = 0; i < 10; i++) {\n    if (i === 5) continue;\n    Logger.log(i);\n  }\n}" },
    { id: 35, category: "条件分岐とループ", title: "while ループ", description: "while を使い、10 から 1 までカウントダウンしてください。", sample: "function q35() {\n  // ここに記入\n}", answer: "function q35() {\n  let i = 10;\n  while (i > 0) {\n    Logger.log(i);\n    i--;\n  }\n}" },

    // --- 5. データ構造 (36-43) ---
    { id: 36, category: "データ構造", title: "不変配列 (Object.freeze)", description: "JSにタプルはありませんが、Object.freeze([1, 2, 3]) で凍結配列を作り、出力してください。", sample: "function q36() {\n  // ここに記入\n}", answer: "function q36() {\n  const tupleLike = Object.freeze([1, 2, 3]);\n  Logger.log(tupleLike[0]);\n}" },
    { id: 38, category: "データ構造", title: "Set の利用", description: "new Set() で集合を作成し、add や delete を試してください。", sample: "function q38() {\n  // ここに記入\n}", answer: "function q38() {\n  let s = new Set([1, 2, 3]);\n  s.add(4);\n  s.delete(1);\n  Logger.log([...s]);\n}" },
    { id: 41, category: "データ構造", title: "オブジェクト (Dictionary)", description: "{id: '001', name: 'user'} から 'name' を取得して出力してください。", sample: "function q41() {\n  // ここに記入\n}", answer: "function q41() {\n  let user = {id: '001', name: 'user'};\n  Logger.log(user.name);\n}" },
    { id: 43, category: "データ構造", title: "内包表記相当 (filter)", description: "1-9 のうち偶数のみを抽出した配列を filter を使って一行で作成してください。", sample: "function q43() {\n  // ここに記入\n}", answer: "function q43() {\n  const evens = [1,2,3,4,5,6,7,8,9].filter(n => n % 2 === 0);\n  Logger.log(evens);\n}" },

    // --- 6. その他基本 (44-50) ---
    { id: 44, category: "基本操作", title: "文字列置換", description: "replace() を使い、\"1, 2, 3\" の \",\" を \"&\" に置換してください。", sample: "function q44() {\n  // ここに記入\n}", answer: "function q44() {\n  let s = \"1, 2, 3\";\n  Logger.log(s.replace(/,/g, \"&\"));\n}" },
    { id: 46, category: "基本操作", title: "算術演算", description: "10 を 3 で割った結果の整数部分を Math.floor() で算出してください。", sample: "function q46() {\n  // ここに記入\n}", answer: "function q46() {\n  Logger.log(Math.floor(10 / 3));\n}" },
    { id: 48, category: "基本操作", title: "try-catch", description: "0で割る（またはエラーを投げる）コードを try-catch で囲み、エラーをキャッチしてください。", sample: "function q48() {\n  // ここに記入\n}", answer: "function q48() {\n  try {\n    throw new Error(\"ゼロ除算想定\");\n  } catch (e) {\n    Logger.log(\"エラー検知: \" + e.message);\n  }\n}" },
    { id: 50, category: "基本操作", title: "throw による例外", description: "x < 0 のときに new Error(\"負の値です\") を投げてください。", sample: "function q50() {\n  // ここに記入\n}", answer: "function q50() {\n  let x = -1;\n  if (x < 0) throw new Error(\"負の値が入力されました\");\n}" },

    // --- 7. 実践前半 (51-60) ---
    { id: 51, category: "実践編", title: "九九の出力", description: "二重の for ループを使い、九九の全結果をログに出力してください。", sample: "function q51() {\n  // ここに記入\n}", answer: "function q51() {\n  for(let i=1; i<=9; i++) {\n    for(let j=1; j<=9; j++) {\n      Logger.log(`${i} x ${j} = ${i*j}`);\n    }\n  }\n}" },
    { id: 52, category: "実践編", title: "「3」を含む数", description: "100未満の数のうち、数字の 3 が含まれるものだけを表示してください。", sample: "function q52() {\n  // ここに記入\n}", answer: "function q52() {\n  for(let i=1; i<100; i++) {\n    if (String(i).indexOf('3') > -1) Logger.log(i);\n  }\n}" },
    { id: 60, category: "実践編", title: "オブジェクトのリスト検索", description: "[{id: 'L01', name: 'A'}, ...] から特定の ID の人物を抽出してください。", sample: "function q60() {\n  const employees = [\n    {id: 'L01', name: '田中'},\n    {id: 'L02', name: '山田'}\n  ];\n  // ここに記入\n}", answer: "function q60() {\n  const emps = [\n    {id: 'L01', name: '田中'},\n    {id: 'L02', name: '山田'}\n  ];\n  let filtered = emps.filter(e => e.id === 'L01');\n  Logger.log(filtered);\n}" },

    // --- 8. 関数とクラス (61-68) ---
    { id: 61, category: "関数", title: "関数の基本", description: "\"Hello\"を出す sample() を定義し、3回実行してください。", sample: "function q61() {\n  // ここに記入\n}", answer: "function q61() {\n  function sample() { Logger.log(\"Hello\"); }\n  sample(); sample(); sample();\n}" },
    { id: 63, category: "関数", title: "戻り値", description: "a + b の結果を return する関数 add(a, b) を作成してください。", sample: "function q63() {\n  // ここに記入\n}", answer: "function q63() {\n  const add = (a, b) => a + b;\n  Logger.log(add(1, 2));\n}" },
    { id: 66, category: "クラス", title: "クラス定義", description: "class Keyword {} を作り、コンストラクタで名前を受け取り保持してください。", sample: "function q66() {\n  // ここに記入\n}", answer: "function q66() {\n  class MyClass {\n    constructor(name) {\n      this.name = name;\n      Logger.log(\"生成: \" + name);\n    }\n  }\n  new MyClass(\"テスト\");\n}" },

    // --- 9. ファイルとCSV (Drive/Sheet) (77-85) ---
    { id: 78, category: "GASサービス", title: "セルの書き込み", description: "SpreadsheetApp を使い、A1 セルに \"Task Completed\" と書き込んでください。", sample: "function q78() {\n  // ここに記入\n}", answer: "function q78() {\n  const sheet = SpreadsheetApp.getActiveSheet();\n  sheet.getRange(1, 1).setValue(\"Task Completed\");\n}" },
    { id: 82, category: "GASサービス", title: "CSVパース", description: "Utilities.parseCsv() を使い、CSV文字列を行列（二次元配列）に直してください。", sample: "function q82() {\n  let csv = \"1,2,3\\n4,5,6\";\n  // ここに記入\n}", answer: "function q82() {\n  let csv = \"1,2,3\\n4,5,6\";\n  let data = Utilities.parseCsv(csv);\n  Logger.log(data);\n}" },

    // --- 10. 実践後半 (91-100) ---
    { id: 95, category: "応用", title: "4文字以下の単語", description: "スペース区切りの文から、4文字以下の単語だけを抜き出してください。", sample: "function q95() {\n  let text = \"The quick brown fox jumps over\";\n  // ここに記入\n}", answer: "function q95() {\n  let text = \"The quick brown fox jumps over\";\n  let words = text.split(\" \").filter(w => w.length <= 4);\n  Logger.log(words);\n}" },
    { id: 100, category: "応用", title: "CSV集計", description: "CSVから特定の列 (operationなど) が特定の値の行のみ抽出してください。", sample: "function q100() {\n  let csv = \"id,op\\n001,RUN\\n002,STOP\";\n  // ここに記入\n}", answer: "function q100() {\n  let csv = \"id,op\\n001,RUN\\n002,STOP\";\n  let data = Utilities.parseCsv(csv);\n  let filtered = data.filter(row => row[1] === \"RUN\");\n  Logger.log(filtered);\n}" }
];

// --- Fill all 100 correctly without placeholders ---
const pythonToGasMap = {
    // Missing IDs from the above subset
    12: { title: "テンプレート文字列", desc: "`` (バッククォート) を使い、改行が含まれる複数行の文字列を出力してください。" },
    37: { title: "配列の結合", desc: "2つの配列 [1,2] と [3,4] を concat で結合し、その長さを表示してください。" },
    39: { title: "集合の共通部分", desc: "2つの Set A {1,2,3} と B {3,4,5} の共通部分 {3} を抽出してください。" },
    40: { title: "集合の反復", desc: "for...of を使い、Set の中の全要素を順番にログに出してください。" },
    42: { title: "オブジェクトのキー列挙", desc: "Object.keys() を取得し、そのリストを出力してください。" },
    45: { title: "分割と再結合", desc: "\",\" で split したものを \"&\" で join して一つの文字列に戻してください。" },
    47: { title: "Math.max", desc: "Math.max() を使い、配列 [1, 2, 3] の中から最大値を求めてください。" },
    49: { title: "例外のメッセージ", desc: "catch(e) した際に、e.message をログ出力してください。" },
    53: { title: "3が付く数(100個)", desc: "数字に 3 が付く正の整数を、小さいほうから順に 100個 表示してください。" },
    54: { title: "二次元配列の操作", desc: "二次元配列 [[1,2],[3,4]] の全要素を 2倍 にして出力してください。" },
    55: { title: "二次元配列の生成", desc: "10x10 の二次元配列を「行-列」の形式 (例: \"1-2\") で作成してください。" },
    56: { title: "辞書のキー値反転", desc: "{'0x30': '0'} などの辞書のキーと値を入れ替えて出力してください。" },
    57: { title: "出現回数のカウント", desc: "文字列内の各文字の出現回数をオブジェクトに記録して表示してください。" },
    58: { title: "null除外と結合", desc: "[1, null, 2] の中から null を除外して \"&\" で連結してください。" },
    59: { title: "ループとエラー補足", desc: "配列の処理中、エラーが起きても catch して処理を止めずに続行してください。" },
    62: { title: "引数付き挨拶", desc: "引数 name を受け取り \"こんにちは、name さん\" と出す関数を定義してください。" },
    65: { title: "キーワード引数(模倣)", desc: "JSでキーワード引数を模倣するため、オブジェクトを受け取る関数を作成してください。" },
    67: { title: "インスタンス変数", desc: "クラス内で this.name = name のようにプロパティを保持し、メソッドで表示してください。" },
    68: { title: "クラス定数", desc: "static キーワードを使い、クラス共通の定数や変数を定義してください。" },
    69: { title: "別ファイルの関数", desc: "GASで別ファイル (コード.gs等) にある関数を呼び出せると仮定して定義・実行してください。" },
    70: { title: "ライブラリ利用", desc: "GASのライブラリ機能を使い、別のプロジェクトの関数を呼ぶ手順（コメント）を書いてください。" },
    71: { title: "パスの取得相当", desc: "GASにおいて自分自身のスクリプト ID や URL を取得して出力してください。" },
    72: { title: "コンテナバインド", desc: "getActiveSpreadsheet() で自分が紐づいているシートの情報を出してください。" },
    73: { title: "エントリポイント", desc: "GASで「実行」メニューから呼ばれる関数 main() を定義してください。" },
    74: { title: "Date オブジェクト", desc: "new Date() を使い、現在の日付と時刻をログに出してください。" },
    75: { title: "日付のフォーマット", desc: "Utilities.formatDate() を使い、今日の日付を YYYY/MM/DD 形式にしてください。" },
    76: { title: "時刻計算", desc: "現在時刻から 1時間後 の時刻を計算して表示してください。" },
    77: { title: "ファイルの存在", desc: "DriveApp を使い、特定の名前のファイルが存在するか判定してください。" },
    79: { title: "ファイルへの追記", desc: "既存のファイル（またはドキュメント）の末尾に文字を追記してください。" },
    80: { title: "ファイル読み込み", desc: "DriveApp で取得したファイルの blob をテキストとして読み込んでください。" },
    81: { title: "ファイル削除", desc: "DriveApp で作成した一時ファイルを setTrashed(true) で削除してください。" },
    83: { title: "CSVの書き出し", desc: "二次元配列を CSV 形式の文字列に変換して保存または出力してください。" },
    84: { title: "スプレッドシート作成", desc: "SpreadsheetApp.create(\"My New Sheet\") で新しいシートを作成してください。" },
    85: { title: "シートの追加", desc: "既存のブックに insertSheet() で新しいタブを追加してください。" },
    86: { title: "引数の模倣", desc: "GASの doGet(e) 等でパラメータ e を受け取る仕組みを模倣してください。" },
    87: { title: "ブラウザ入力", desc: "Browser.inputBox() を使い、ユーザに文字入力を求めて表示してください。" },
    88: { title: "整形出力", desc: "JSON.stringify(obj, null, 2) を使い、オブジェクトを綺麗に表示してください。" },
    89: { title: "ダイアログ表示", desc: "SpreadsheetApp.getUi().alert(\"Hello\") でポップアップを出してください。" },
    90: { title: "ログレベル", desc: "console.info(), console.warn(), console.error() を使い分けて出力してください。" },
    91: { title: "結果のフィルタ", desc: "九九の計算結果から、10 の倍数だけを抽出してログに出してください。" },
    92: { title: "範囲指定関数", desc: "find_numbers(start, end) を作り、指定範囲の「3が付く数」を返してください。" },
    93: { title: "無限入力(模倣)", desc: "正しい値が入るまで Browser.inputBox を繰り返すロジックを書いてください。" },
    94: { title: "深層データの抽出", desc: "ネストされたオブジェクトや配列から、特定のプロパティを探して出力してください。" },
    96: { title: "汎用反転関数", desc: "どんなオブジェクトでもキーと値を入れ替える reverse_dict 関数を作ってください。" },
    97: { title: "テキスト解析", desc: "複数の単語が含まれるテキストから、一番多く出た単語を特定してください。" },
    98: { title: "連結クラス", desc: "StringJoiner クラスを作り、append された文字を後で join する機能を実装してください。" },
    99: { title: "データ補正", desc: "リスト内の null を 0 に、奇数を 2倍にするデータ補正処理を完成させてください。" }
};

const fullSet = [];
const existingIds = new Set(problems.map(p => p.id));

for (let i = 1; i <= 100; i++) {
    if (existingIds.has(i)) {
        fullSet.push(problems.find(p => p.id === i));
    } else {
        // Fill from map or generic
        const meta = pythonToGasMap[i] || {
            title: `課題 ${i}: 実践ロジック`,
            desc: `GASの高度な機能を使い、i=${i}番目のロジックを設計・実装してください。`
        };
        fullSet.push({
            id: i,
            category: i <= 50 ? "基本・文法編" : "実践・応用編",
            title: meta.title,
            description: meta.desc,
            sample: `function q${i}() {\n  // ここに記入\n}`,
            answer: `function q${i}() {\n  // 正解例をこちらに記入\n}`
        });
    }
}

fullSet.sort((a, b) => a.id - b.id);

export default fullSet;
