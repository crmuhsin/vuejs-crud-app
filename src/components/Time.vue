<template>
<div id="app" class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="page">
                <div class="swiper-container">
                    <h1>Timeline of DC State</h1>
                    <p class="swiper-control">
                        <button type="button" class="btn btn-info button-width swiper-button-prev">Prev</button>
                        <button type="button" class="btn btn-info button-width swiper-button-next">Next</button>
                    </p>
                    <div class="swiper-wrapper timeline-wrapper">
                        <div class="swiper-slide timeline" v-for="item in timeLine" :key="item.id">
                            <div class="event" :data-after-content="item.sort">
                                <h6>{{item.sortOrderOfDCState}}</h6>
                                <p>Start Date : </p>
                                <p>{{item.startDate}}</p>
                                <p>End Date : </p>
                                <p>{{item.endDate}}</p>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
   		</div>
	</div>
</div>
</template>

<script>
import Swiper from 'swiper';

export default {
  name: "Time",
  data() {
	return {
        myclass: "",
		timeLine : [
            {sort: 1, sortOrderOfDCState:'DC Opening', startDate:'Sep 6, 2019 12:00:00 AM', endDate:'Sep 6, 2019 12:00:00 AM'},
            {sort: 2, sortOrderOfDCState:'Send to foreign bank', startDate:'Sep 6, 2019 12:00:00 AM', endDate:'Sep 6, 2019 12:00:00 AM'},
            {sort: 3, sortOrderOfDCState:'Benificiary Confirmation', startDate:'Sep 6, 2019 12:00:00 AM', endDate:'Sep 6, 2019 12:00:00 AM'},
            {sort: 4, sortOrderOfDCState:'Product Readiness', startDate:'Sep 6, 2019 12:00:00 AM', endDate:'Sep 6, 2019 12:00:00 AM'},
            {sort: 5, sortOrderOfDCState:'Freight Forwarder booking', startDate:'Sep 6, 2019 12:00:00 AM', endDate:'Sep 6, 2019 12:00:00 AM'},
            {sort: 6, sortOrderOfDCState:'XO export', startDate:'Sep 6, 2019 12:00:00 AM', endDate:'Sep 6, 2019 12:00:00 AM'},
            {sort: 7, sortOrderOfDCState:'Freight Forwarder product pick from supplier', startDate:'Sep 6, 2019 12:00:00 AM', endDate:'Sep 6, 2019 12:00:00 AM'},
            {sort: 8, sortOrderOfDCState:'Pre shipment inspection', startDate:'Sep 6, 2019 12:00:00 AM', endDate:'Sep 6, 2019 12:00:00 AM'},
            ],
        }
    },
    computed(){
        // this.myclass = ".event::after {  content: \"" + this.steps[0].id + "\"; }";
    },
	mounted() {
		new Swiper('.swiper-container', {
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},
			slidesPerView: 8,
			grabCursor: true,
		});
	},
};
</script>

<style scoped>
.page {
	padding: 15px;
	margin-bottom: 5px;
	border: 1px #D3D3D3 solid;
	border-radius: 2px;
	background: white;
	font-size: 13px;
}
.swiper-container {
    overflow: hidden;
}
.timeline-wrapper {
    display: flex;
}
.timeline-wrapper::after {
    position: absolute;
    height: 10px;
    transition: 0.75s ease-out;
    background: #67cafa;
    width: 0px;
    z-index: 0 !important;
}
.timeline {
    display: flex;
    transition: all 0.3s;
    padding-bottom: 30px;
    border-bottom: 10px solid #0684c2;
    margin: 0 0 50px 0;
}
.timeline .event h6{
    max-height: 90px;
    min-height: 90px;
    padding: 5px;
    font-weight: bold;
}

.timeline .event p{
    margin: auto;
    padding: 0px;
}
.timeline .event {
    display: block;
    float: left;
    background: #caecfd;
    padding: 1em;
    border-radius: 5px;
    position: relative;
    margin: 0 1em 0 1em;
    transition: all 0.3s;
    box-shadow: 0 0 5px #ccc;
    color: #03415f;
    text-align: center;
    flex-basis: 100px;
}

.timeline .event:hover {
    background: #98dbfc;
    box-shadow: 0px 0px 10px #ccc;
    transform-origin: 100px 0px;
    transform: rotate(-10deg);
    z-index: 2;
}
.timeline .event:hover::after {
    border-color: #046291;
    z-index: 2;
}
.timeline .event::after {
    margin: 0 auto;
    position: relative;
    bottom: -65px;
    content: attr(data-after-content);
    display: block;
    border-radius: 15px;
    height: 30px;
    width: 30px;
    box-sizing: border-box;
    box-shadow: 0 0 5px #046291;
    background: #fff;
    border: 5px solid #0684c2;
    transition: all 0.25s;
    z-index: 2;
}
.timeline .event.active {
    background: #ffffe0;
    transform: scale(1.1) translateY(-5px);
    box-shadow: 0 0 10px #ccc;
    z-index: 2;
}
.timeline .event.active::after {
    border-color: #67cafa;
    transform: scale(1.1);
}
.timeline .event.previous {
    background: rgba(0, 0, 0, 0.05);
    color: rgba(0, 0, 0, 0.1);
}
.timeline .event.previous p {
    color: rgba(0, 0, 0, 0.1);
}
.timeline .event.previous:hover {
    opacity: 1;
}
</style>
