export class CounterService {
    countStatusChange(count: number,activeStatus:string) {

        if(activeStatus=='InActive'){
            console.log('Number of status changed: Inactive->Active ' + count);
        }else if (activeStatus=='active') {
            console.log('Number of status changed: Active->Inactive ' + count); 
        }
    }
  }