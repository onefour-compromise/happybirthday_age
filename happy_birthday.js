function happyBirthday() {
    var human = ''//人物名
    var age = ;//年齢
    var endloop = ;//ループを止める年齢
    var year = ;//記入を始める年
    var birthday = '';//誕生日

    function createEvents(human, age, year, birthday) {
        var calendar = CalendarApp.getDefaultCalendar();
        for (var i = 0, len = endloop - age; i <= len; i++) {
            var strDate = (year + i) + '/' + birthday;
            var day = new Date(strDate);
            var humanAge = human + 'の誕生日（' + (age + i) + '歳）';
            calendar.createAllDayEvent(humanAge, day);
        }
    }
    createEvents(human, age, year, birthday);
}



//登録した予定を消す。
function unHappyBirtyday() {
    var human = '';//人物名
    var calendar = CalendarApp.getAllCalendars();
    //取得開始日
    var startDay = new Date();//'yyyy/mm/dd'で日付
    //取得終了日
    var endDay = new Date();//'yyyy/mm/dd'で日付

    //ユーザーが指定した期間のイベントを取得
    var days = CalendarApp.getEvents(startDay, endDay);
    var reg = //;//正規表現。ここに人物名を書く
    for (var evt in days) {
        if (reg.test(days[evt].getTitle())) {
            days[evt].deleteEvent();
        }
    }
}