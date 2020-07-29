<template>
  <div>
    <div class="builderTitle">
      <h2>Create your own guitar !</h2>
    </div>

    <div class="mainBuilder">
      <div class="detailsPart">
        <ul>
          <li>Neck<br/>
            <span class="productTitle">{{ availableParts.necks[selectedNeckIndex].title }}</span>
          </li>
          <li>Body<br/>
            <span class="productTitle">{{ availableParts.bodies[selectedBodyIndex].title }}</span>
            </li>
        </ul>
      </div>
      <div class="guitarPart">
          <div class="necPart">
            <img :src="availableParts.necks[selectedNeckIndex].src" alt="neck image">
            <button @click="selectPreviousNeck()" class="prev-selector">&#9668;</button>
            <button @click="selectNextNeck()" class="next-selector">&#9658;</button>
          </div>
          <div class="bodyPart">
            <img :src="availableParts.bodies[selectedBodyIndex].src" alt="body image">
            <button @click="selectPreviousBody()" class="prev-selector">&#9668;</button>
            <button @click="selectNextBody()" class="next-selector">&#9658;</button>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import availableParts from '../data/parts';

function getPreviousValidIndex(index, length) {
  const decrementIndex = index - 1;
  return decrementIndex < 0 ? length - 1 : decrementIndex;
}

function getNextValidIndex(index, length) {
  const incrementedIndex = index + 1;
  return incrementedIndex > length - 1 ? 0 : incrementedIndex;
}

export default {
  name: 'GuitarBuilder',
  data() {
    return {
      availableParts,
      selectedNeckIndex: 0,
      selectedBodyIndex: 0,
    };
  },
  methods: {
    selectNextNeck() {
      this.selectedNeckIndex = getNextValidIndex(
        this.selectedNeckIndex, availableParts.necks.length,
      );
    },
    selectPreviousNeck() {
      this.selectedNeckIndex = getPreviousValidIndex(
        this.selectedNeckIndex, availableParts.necks.length,
      );
    },
    selectNextBody() {
      this.selectedBodyIndex = getNextValidIndex(
        this.selectedBodyIndex, availableParts.bodies.length,
      );
    },
    selectPreviousBody() {
      this.selectedBodyIndex = getPreviousValidIndex(
        this.selectedBodyIndex, availableParts.bodies.length,
      );
    },
  },
};
</script>

<style scoped>
    .builderTitle {
        margin-top: -40px;
    }
    h2 {
        font-size : 18px;
        text-transform: uppercase;
    }
    .mainBuilder {
        display: flex;
        justify-content: center;
        padding: 0 10px;
        margin: 40px auto 0;
        width: 320px;
    }
    .detailsPart {
        width: 35%;
        height: 130px;
        text-align: center;
        padding: 25px 15px;
        margin-right: 5%;
    }
    .detailsPart ul {
        list-style: none;
    }
    .detailsPart ul li {
        font-size: 13px;
        padding: 5px 0;
    }
    .guitarPart {
        width: 60%;
    }
    .necPart, .bodyPart {
        position: relative;
    }
    .necPart img {
        position: relative;
        z-index: 1;
        width:40%;
    }
    .bodyPart {
        margin-top: -58px;
    }
    .bodyPart img {
        width:80%;
        margin-left:-16px;
        margin-top: 2px;
    }
    .prev-selector {
        position: absolute;
        width: 25px;
        height:25px;
        z-index: 1;
        top: 80px;
        left: 0;
        cursor: pointer;
    }
    .next-selector {
        position: absolute;
        width: 25px;
        height:25px;
        z-index: 1;
        top: 80px;
        right: 0;
        cursor: pointer;
    }

</style>
