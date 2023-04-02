<script setup lang="ts">
  import { useRouter } from 'vue-router';
  import { ref, defineProps, computed, withDefaults, Ref, watch } from "vue"
  import { User } from "firebase/auth";
  import 'firebase/firestore';
  import { doc, getDocs, collection,  } from 'firebase/firestore';

  import { db, auth } from '../firebase/init.js'
import { time } from 'console';
  const gs = doc(db, 'gameStats/user')


  let docData: {
    date: string;
    gameNum: number;
    gameWin: string;
    time: number;
    word: string;
    guesses: Array<string>;
  }

const router = useRouter();
const userUid = ref('');
let usId = "";
let newUserUid = "";
let wordStr: string = "";

async function logUserUid() {
  await new Promise<void>((resolve) => {
    watch(userUid, (newValue, oldValue) => {
      console.log(`userUid changed from ${oldValue} to ${newValue}`);
      newUserUid = newValue;
      resolve();
    });
  });

  console.log(`New userUid value: ${newUserUid}`);
}

function setUserId(user: User | null) {
  if (user) {
    userUid.value = user.uid;
    usId = user.uid;
  } else {
    userUid.value = '';
    usId = '';
  }
}

auth.onAuthStateChanged(setUserId);
logUserUid();
console.log(`New value ${newUserUid}`)

const gameStatsRef = collection(db, "gameStats");

getDocs(gameStatsRef).then((gameStatsSnapshot) => {
  const gameStatsPromises = gameStatsSnapshot.docs.map((gameStatDoc) => {
    const newUserIdRef = collection(gameStatDoc.ref, newUserUid);
    return getDocs(newUserIdRef).then((newUserIdSnapshot) => {
      const newUserIdData = newUserIdSnapshot.docs.map((newUserIdDoc) => {
        return { ...newUserIdDoc.data(), id: newUserIdDoc.id };
      });
      return { ...gameStatDoc.data(), id: gameStatDoc.id, newUserId: newUserIdData };
    });
  });
  return Promise.all(gameStatsPromises);
})
.then((gameStatsData) => {
  const newUserIdArray = gameStatsData.map((data) => data.newUserId);
  console.log(gameStatsData);
  assignValues(newUserIdArray);
  // console.log(newUserIdArray[0].length as number);
})
.catch((err) => {
  console.log(err.message);
});

function assignValues(nidArr: any) {
  if ('date' in nidArr[0][0]  || 'gameNum' in nidArr[0][0] || 'gameWin' in nidArr[0][0] || 'guesses' in nidArr[0][0] || 'time' in nidArr[0][0] || 'word' in nidArr[0][0]) {
    const docDataArray = [];
    for (let i = 0; i < nidArr[0].length; i++) {
      console.log(nidArr[0][i].date, nidArr[0][i].gameNum, nidArr[0][i].gameWin, nidArr[0][i].guesses, nidArr[0][i].time, nidArr[0][i].word); //Code to get 'word' from document.
      docDataArray.push({date: nidArr[0][i].date,
        gameNum: nidArr[0][i].gameNum,
        gameWin: nidArr[0][i].gameWin,
        guesses: nidArr[0][i].guesses,
        time: nidArr[0][i].time,
        word: nidArr[0][i].word});
    }
    const tArea4 = document.getElementById("area4");
    const tbl = document.createElement("table");
    const tr1 = document.createElement("tr");
    const th1 = document.createElement("th");
    const th2 = document.createElement("th");
    const th3 = document.createElement("th");
    const th4 = document.createElement("th");
    const th5 = document.createElement("th");
    const th6 = document.createElement("th");
    const colHead1 = document.createTextNode("Date");
    const colHead2 = document.createTextNode("Game Number");
    const colHead3 = document.createTextNode("Game Win");
    const colHead4 = document.createTextNode("Guesses");
    const colHead5 = document.createTextNode("Time");
    const colHead6 = document.createTextNode("Word");
    th1.appendChild(colHead1);
    th2.appendChild(colHead2);
    th3.appendChild(colHead3);
    th4.appendChild(colHead4);
    th5.appendChild(colHead5);
    th6.appendChild(colHead6);
    tr1.appendChild(th1);
    tr1.appendChild(th2);
    tr1.appendChild(th3);
    tr1.appendChild(th4);
    tr1.appendChild(th5);
    tr1.appendChild(th6);
    tbl.appendChild(tr1);
    tArea4?.appendChild(tbl);

    for (const data of docDataArray) {
        const tr2 = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        const td4 = document.createElement("td");
        const td5 = document.createElement("td");
        const td6 = document.createElement("td");
        const col1 = document.createTextNode(`${data.date}`);
        const col2 = document.createTextNode(`${data.gameNum}`);
        const col3 = document.createTextNode(`${data.gameWin}`);
        const col4 = document.createTextNode(`${data.guesses}`);
        const col5 = document.createTextNode(`${data.time}`);
        const col6 = document.createTextNode(`${data.word}`);
        td1.appendChild(col1);
        td2.appendChild(col2);
        td3.appendChild(col3);
        td4.appendChild(col4);
        td5.appendChild(col5);
        td6.appendChild(col6);
        tr2.appendChild(td1);
        tr2.appendChild(td2);
        tr2.appendChild(td3);
        tr2.appendChild(td4);
        tr2.appendChild(td5);
        tr2.appendChild(td6);
        tbl.appendChild(tr2);
    }
  }
} 

</script>

<template>
  <h1>Game Statistics</h1>
  <div>
    <span id = "area4" class="ar4"></span>
  </div>
  <router-view />
</template>

<style scoped>

</style>