
console.log("suc")
















const bmiStatesData = {
    "overThin": {
      "state": "過輕",
      "color": "藍色"
    },
    "normal": {
      "state": "正常",
      "color": "紅色"
    },
    "overWeight": {
      "state": "過重",
      "color": "澄色"
    },
    "mildFat": {
      "state": "輕度肥胖",
      "color": "黃色"
    },
    "moderateFat": {
      "state": "中度肥胖",
      "color": "黑色"
    },
    "severeFat": {
      "state": "重度肥胖",
      "color": "綠色"
    },
  }

//第一階段


function printBmi(height, weight){
    const bmi = Number((weight/(height/100)**2).toFixed(2)); //使用 toFixed 方法回傳的會是字串,使用Number()會把string變成number
    console.log(typeof(bmi));//會是string
    console.log(bmi)
 
  
    if(bmi<18){
        console.log("您的體重過輕")
    }else if(bmi<24){
        console.log("您的體重正常")
    }else if(bmi<27){
        console.log("您的體重過重")
    }else if(bmi<30){
        console.log("您的體重輕度肥胖")
    }else if(bmi<35){
        console.log("您的體重中度肥胖")
    }else if(bmi>=35){
        console.log("您的體重重度肥胖")
    }else{
        console.log("您的數值輸入錯誤，請重新輸入");
    }
}

//第二階段

// function printBmiText(state){
//     console.log(`您的體重${bmiStatesData[state].state}，健康指數為${bmiStatesData[state].color}`)
// }

// function printBmi(height, weight){
//     const bmi = (weight/(height/100)**2).toFixed(2);
//     if(bmi<18){
//         printBmiText("overThin");
//         addData(bmi, "overThin");
//     }else if(bmi<24){
//         printBmiText("normal");
//         addData(bmi, "normal");
//     }else if(bmi<27){
//         printBmiText("overWeight");
//         addData(bmi, "overWeight");
//     }else if(bmi<30){
//         printBmiText("mildFat");
//         addData(bmi, "mildFat");
//     }else if(bmi<35){
//         printBmiText("moderateFat");
//         addData(bmi, "moderateFat");
//     }else if(bmi>=35){
//         printBmiText("severeFat");
//         addData(bmi, "severeFat");
//     }else{
//         console.log("您的數值輸入錯誤，請重新輸入");
//     }
// }







//第三階段

let bmiHistoryData = [];

function addData(bmi, state){
    let obj = {};
    obj.bmi = bmi;
    obj.state = state;
    bmiHistoryData.push(obj);
}

function showHistoryData(){
    let times = bmiHistoryData.length;
    let lastState = bmiHistoryData[times-1].state;
    console.log(`您總共計算${times} 次 BMI 紀錄，最後一次 BMI 指數為${bmiHistoryData[times-1].bmi}，
    體重${bmiStatesData[lastState].state}！健康指數為${bmiStatesData[lastState].color} `)
}


printBmi(178, 20);
printBmi(178, 70);
printBmi(178, 85);
showHistoryData();
// printBmi(178, 85);
// printBmi(178, 90);
// printBmi(178, 110);
// printBmi(178, 130);
// printBmi("身高","體重");



