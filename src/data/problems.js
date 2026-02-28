const currentProblems = [
    // 1-10: 基本と出力
    { id: 1, category: "基本", title: "Logger.log の使用", description: "Logger.log を使って、コンソールに 'Hello World' と表示してください。", sample: "function q1() {\n  // ここに記入\n}", answer: "function q1() {\n  Logger.log('Hello World');\n}" },
    { id: 2, category: "基本", title: "文字列の結合", description: "'Hello' と 'World' を結合して出力してください。", sample: "function q2() {\n  // ここに記入\n}", answer: "function q2() {\n  Logger.log('Hello' + 'World');\n}" },
    { id: 3, category: "基本", title: "変数の宣言 (const)", description: "定数 PI に 3.14 を代入し、出力してください。", sample: "function q3() {\n  // ここに記入\n}", answer: "function q3() {\n  const PI = 3.14;\n  Logger.log(PI);\n}" },
    { id: 4, category: "基本", title: "変数の宣言 (let)", description: "変数 count に 1 を代入し、次に 2 を代入して出力してください。", sample: "function q4() {\n  // ここに記入\n}", answer: "function q4() {\n  let count = 1;\n  count = 2;\n  Logger.log(count);\n}" },
    { id: 5, category: "基本", title: "算術演算", description: "10 足す 5 の結果を出力してください。", sample: "function q5() {\n  // ここに記入\n}", answer: "function q5() {\n  Logger.log(10 + 5);\n}" },
    // 11-30: 制御構文
    { id: 11, category: "制御構文", title: "if文 (基本)", description: "変数 x が 10 より大きい場合に 'Big' と出力してください。", sample: "function q11() {\n  const x = 15;\n  // ここに記入\n}", answer: "function q11() {\n  const x = 15;\n  if (x > 10) {\n    Logger.log('Big');\n  }\n}" },
    { id: 12, category: "制御構文", title: "for文 (基本)", description: "0から4までを順番に出力してください。", sample: "function q12() {\n  // ここに記入\n}", answer: "function q12() {\n  for (let i = 0; i < 5; i++) {\n    Logger.log(i);\n  }\n}" },
    // 31-60: スプレッドシート操作 (GASの目玉)
    { id: 31, category: "スプレッドシート", title: "アクティブシートの取得", description: "現在開いているスプレッドシートの名前を取得して出力してください。", sample: "function q31() {\n  // ここに記入\n}", answer: "function q31() {\n  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();\n  Logger.log(sheet.getName());\n}" },
    { id: 32, category: "スプレッドシート", title: "セルの値取得", description: "A1セルの値を取得して出力してください。", sample: "function q32() {\n  // ここに記入\n}", answer: "function q32() {\n  const sheet = SpreadsheetApp.getActiveSheet();\n  const value = sheet.getRange('A1').getValue();\n  Logger.log(value);\n}" },
    { id: 33, category: "スプレッドシート", title: "セルの値設定", description: "B1セルに 'GAS100' と書き込んでください。", sample: "function q33() {\n  // ここに記入\n}", answer: "function q33() {\n  const sheet = SpreadsheetApp.getActiveSheet();\n  sheet.getRange('B1').setValue('GAS100');\n}" },
    // 61-80: Googleサービス連携
    { id: 61, category: "Gmail", title: "自分にメール送信", description: "件名 'Test', 本文 'Hello' で自分宛にメールを送ってください。", sample: "function q61() {\n  // ここに記入\n}", answer: "function q61() {\n  const email = Session.getActiveUser().getEmail();\n  GmailApp.sendEmail(email, 'Test', 'Hello');\n}" },
    { id: 81, category: "Drive", title: "ファイル作成", description: "Driveのルートに 'New File' という名前のテキストファイルを作成してください。", sample: "function q81() {\n  // ここに記入\n}", answer: "function q81() {\n  DriveApp.createFile('New File', 'Hello content', MimeType.PLAIN_TEXT);\n}" },
];

// Helper to fill up to 100
const fullProblems = [...currentProblems];
const categories = ["基本", "制御構文", "スプレッドシート", "Gmail", "Drive", "カレンダー", "トリガー", "外部API"];

for (let i = fullProblems.length + 1; i <= 100; i++) {
    const cat = categories[i % categories.length];
    fullProblems.push({
        id: i,
        category: cat,
        title: `課題 ${i}: ${cat} に関する挑戦`,
        description: `GASを用いた ${cat} の高度な処理を実装してください。`,
        sample: `function q${i}() {\n  // ここに入力\n}`,
        answer: `function q${i}() {\n  // Answer for q${i}\n}`
    });
}

export default fullProblems;
