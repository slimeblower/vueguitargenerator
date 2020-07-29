<template>
  <div>
    <div class="builderTitle">
      <h2>Create your own guitar !</h2>
    </div>

    <div class="mainBuilder">
      <div class="detailsPart">
        <ul>
          <li>Name :</li>
          <li>Neck :</li>
          <li>Body</li>
        </ul>
      </div>
      <div class="guitarPart">
          <div class="necPart">
            <img src="../assets/images/nec-exp.png" alt="neck-exp image">
            <button class="prev-selector">&#9668;</button>
            <button class="next-selector">&#9658;</button>
          </div>
          <div class="bodyPart">
            <img src="../assets/images/bod-expl.png" alt="body-exp image">
            <button class="prev-selector">&#9668;</button>
            <button class="next-selector">&#9658;</button>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GuitarBuilder',
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
        margin-top: 40px;
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
        width:40%;
    }
    .bodyPart {
        margin-top: -58px;
    }
    .bodyPart img {
        width:80%;
        margin-left:-19px;
        margin-top:-3px;
    }
    .prev-selector {
        position: absolute;
        top: 80px;
        left: 0;
    }
    .next-selector {
        position: absolute;
        top: 80px;
        right: 0;
    }

</style>
