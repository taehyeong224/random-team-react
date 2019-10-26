import {ADD_NAME, CLEAR_NAME, GET_NAMES, REMOVE_NAME} from "../../../src/config/constants";
import {expect} from "chai"
import {names} from "../../../src/store/reducers";
import v4 from "uuid";
import {clearName, removeName} from "../../../src/actions";
import deepFreeze from "deep-freeze";


describe("리듀서 테스트", () => {
    describe("names", () => {
        it(`${ADD_NAME} 성공`, () => {
            const state = [];
            const action = {
                type: ADD_NAME,
                name: v4(),
                id: v4()
            };
            deepFreeze(state)
            deepFreeze(action)
            const result = names(state, action);
            expect(result.length).to.be.eq(1);
        });

        it(`${REMOVE_NAME} 성공`, () => {
            const state = [];
            deepFreeze(state)
            const result = names(names(names(state, deepFreeze(addNameAction())), deepFreeze(addNameAction())), deepFreeze(addNameAction()));
            expect(names(result, removeName(result[0].id)).length).to.be.eq(2)
        });

        it(`${CLEAR_NAME} 성공`, () => {
            expect(names(names(names(names([], addNameAction()), addNameAction()), addNameAction()), clearName()).length).to.be.eq(0)
        });

        it(`${GET_NAMES} 성공`, () => {
            expect(names(names(names(names([], addNameAction()), addNameAction()), addNameAction()), {type: GET_NAMES}).length).to.be.eq(3)
        });
    });
});

const addNameAction = () => {
  return {
      type: ADD_NAME,
      name: v4(),
      id: v4()
  }
};
