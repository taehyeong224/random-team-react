import {isExist} from "./Validtaion";
import {shuffle} from "underscore";

export const shake = (shuffledList, team) => {
    return sliceEmptyArray(insertToGroup(shuffle(shuffledList), divide(team), team));
};

export const divide = (team) => {
    const result = [];
    if (team.count < 1) {
        team.count = 1;
    }
    for (let i = 0; i < team.count; i++) {
        result.push([]);
    }
    return result;
};

export const insertToGroup = (shuffleList, divided, team) => {
    console.log("shuffleList : ", shuffleList);
    const result = JSON.parse(JSON.stringify(divided));
    let k = 0;
    for (let i = 0; i < team.count; i++) { // 팀 갯 수 만큼 돌도록
        for (let j = k; j < shuffleList.length; j++) { // array 길이 만큼 돌도록
            result[i].push(isExist(shuffleList[j]) ? shuffleList[j] : null);
            k = j;
            if (result[i].length === Number(team.size)) {
                break;
            }
        }
        k = k + 1;
    }
    return result;
};

export const sliceEmptyArray = (group) => {
    const copy = group.filter((ary) => {
        return ary.length > 0
    });
    return JSON.parse(JSON.stringify(copy));
};

