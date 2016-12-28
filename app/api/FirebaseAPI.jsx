import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAUIZNap4JPklDQyLgEXGeDdjpKEevlGIc",
  authDomain: "euler-app.firebaseapp.com",
  databaseURL: "https://euler-app.firebaseio.com",
  storageBucket: "euler-app.appspot.com",
  messagingSenderId: "354490323222"
};
firebase.initializeApp(config);
var databaseRef = firebase.database().ref();


export var getProblems = () => {
  return databaseRef.once('value').then((snapshot) => {
    var problems = snapshot.val().problems;
    return problems;
  }, (e) => {
    console.log('Unable to get problems from database.', e);
  });
}

export var runTests = () => {
  // databaseRef.set({
  //   appName: 'Eulertest'
  // });

  // databaseRef.child('problems').push({
  //   1: {
  //     id: 1,
  //   }
  // });

  // databaseRef.update({
  //   appName: 'Eulertest2'
  // });

  // databaseRef.child('problems').update({
  //   '1/id' : 6
  // });

  // databaseRef.child('problems/1/languages').push(
  //   'javascript'
  // );

  // updateProblem(3, 'php', 35, 'return 12');

}

export var updateProblem = (problemId, name, language, answer, currentCode) => {
  databaseRef.child('problems/' + problemId).update({
    id: problemId,
    answer: answer,
    imageFile: '/images/problems/' + problemId + '.jpg',
    name: name
  });

  databaseRef.child('problems/' + problemId + '/currentCode/' + language).update({
    code : currentCode
  });

  databaseRef.child('problems/' + problemId + '/languages').push(language);
}
