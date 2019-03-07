import * as actionTypes from '../actions/actionTypes';

const initialState = {
    Block: null,
    Course: '',
    Lesson: '',
    Counter: 0,
    Questions: [],
    Question: '',
    Answers: [],
    Answer: '',
    Favorites: [],
    Favorite: false,
    Empty: false,
    Ids: [],
    Boxes: []
}

const init = (state, action) => {
    const block = action.block;
    const course = action.Course;
    const lesson = action.Lesson;
    let ids = [];
    let questions = [];
    let answers = [];
    let favorites = [];
    let boxes = [];
    Object.keys(block).map(id => {
        let card = block[parseInt(id)];
        return (
            ids.push(parseInt(id))
            &
            boxes.push(card.box)
            &
            questions.push(card.question)
            &
            answers.push(card.answer)
            &
            favorites.push(card.favorite)
        )
    });
    return {
        ...state,
        Empty: false,
        Block: block,
        Course: course,
        Lesson: lesson,
        Ids: ids,
        Boxes: boxes,
        Questions: questions,
        Question: questions[0],
        Answers: answers,
        Answer: answers[0],
        Favorites: favorites,
        Favorite: favorites[0]
    };
}

const trueAnswer = (state, action) => {
    let counter = state.Counter;
    const ids = state.Ids;
    const block = state.Block;
    const cardNumber = ids[counter];
    const card = block[cardNumber];
    if (card.box < 5) { // not letting cards go farther than last box
        card.box++;
    } else {
        card.box = 5;
    }
    block[cardNumber] = card;
    counter++;
    const favorites = state.Favorites;
    let favorite = state.Favorite;
    const questions = state.Questions;
    const answers = state.Answers;
    favorite = favorites[counter];
    if (counter < questions.length) {
        setTimeout(() => {
            return {
                ...state,
                Answer: answers[counter]
            };
        }, 450);
        return {
            ...state,
            Favorite: favorite,
            AnswerOpen: false,
            Question: questions[counter],
            Counter: counter,
            Block: block
        };
    } else {
        return {
            ...state,
            Empty: true
        };
    }
}

const falseAnswer = (state, action) => {
    let counter = state.Counter;
    const ids = state.Ids;
    const block = state.Block;
    const cardNumber = ids[counter];
    const card = block[cardNumber];
    card.box = 1; // placing the card in the first box
    block[cardNumber] = card;
    counter++;
    const favorites = state.Favorites;
    let favorite = state.Favorite;
    const questions = state.Questions;
    const answers = state.Answers;
    favorite = favorites[counter];
    if (counter < questions.length) {
        setTimeout(() => {
            return {
                ...state,
                Answer: answers[counter]
            };
        }, 450);
        return {
            ...state,
            Favorite: favorite,
            AnswerOpen: false,
            Question: questions[counter],
            Counter: counter,
            Block: block
        };
    } else {
        return {
            ...state,
            Empty: true
        };
    }
}

const box0Answer = (state, action) => {
    let counter = state.Counter;
    const ids = state.Ids;
    const block = state.Block;
    const cardNumber = ids[counter];
    const card = block[cardNumber];
    card.box = 1; // placing the card in the first box
    block[cardNumber] = card;
    counter++;
    const favorites = state.Favorites;
    let favorite = state.Favorite;
    const questions = state.Questions;
    const answers = state.Answers;
    favorite = favorites[counter];
    if (counter < questions.length) {
        setTimeout(() => {
            return {
                ...state,
                Answer: answers[counter]
            };
        }, 450);
        return {
            ...state,
            Favorite: favorite,
            AnswerOpen: false,
            Question: questions[counter],
            Counter: counter,
            Block: block
        };
    } else {
        return {
            ...state,
            Empty: true
        };
    }
}

const favorite = (state, action) => {
    const counter = state.Counter;
    const ids = state.Ids;
    const block = state.Block;
    const favorites = state.Favorites;
    let favorite = state.Favorite;
    const cardNumber = ids[counter];
    const card = block[cardNumber];
    card.favorite = !card.favorite;
    block[cardNumber] = card;
    favorites[counter] = !favorites[counter];
    favorite = !favorite;
    if (favorite) {
        return {
            ...state,
            Favorites: favorites,
            Favorite: favorite,
            Block: block
        };
    } else {
        return {
            ...state,
            Favorites: favorites,
            Favorite: favorite,
            Block: block
        };
    }
}

const cardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INIT_BOX: return init(state, action);
        case actionTypes.TRUE_ANSWER: return trueAnswer(state, action);
        case actionTypes.FALSE_ANSWER: return falseAnswer(state, action);
        case actionTypes.BOX_0_ANSWER: return box0Answer(state, action);
        case actionTypes.FAVORITE: return favorite(state, action);
        default:
            return state;
    }
}

export default cardsReducer;