// 인스턴스 객체에 배열을 만들고
// instance.book(start, end)로 스케줄을 추가하며 
// 기존 스케줄과 겹치는 범위가 오면 false, 겹치지 않으면 true를 반환하는 문제

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */

 class MyCalendar {
    
    constructor(){
        this.times = [];
    }

    book(start, end){
        
        for(let time of this.times){
            if(time[1] > start && time[0] < end){
                return false;
            }
        }
            
        this.times.push([start, end])
        return true; 
    }
}