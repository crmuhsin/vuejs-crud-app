<template>
<div id="app" class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="page">
                <div class="swiper-container">
                    <h1>Timeline of DC State</h1>
                    <p class="swiper-control">
                        <button type="button" class="btn btn-info button-width swiper-button-prev mr-3">Prev</button>
                        <button type="button" class="btn btn-info button-width swiper-button-next ">Next</button>
                    </p>
                    <div class="swiper-wrapper timeline-wrapper">
                        <div class="swiper-slide timeline" v-for="item in timeLine" :key="item.id">
                            <div class="event" :data-after-content="item.sort">
                                <h6>{{item.sortOrderOfDCState}}</h6>
                                <span>
                                    <p>Start Date : </p>
                                    <p>{{item.startDate}}</p>
                                </span>
                                <span>
                                    <p>End Date : </p>
                                    <p>{{item.endDate}}</p>
                                </span>
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
import moment from 'moment';

export default {
  name: "Time",
  data() {
	return {
		timeLine : [
            {sort: 1, sortOrderOfDCState:'DC Opening', startDate:'Sep 6, 2019 12:00:00 AM', endDate:'Sep 6, 2019 12:00:00 AM'},
            {sort: 2, sortOrderOfDCState:'Send to foreign bank', startDate:'Sep 6, 2019 12:00:00 AM', endDate:'Sep 6, 2019 12:00:00 AM'},
            {sort: 3, sortOrderOfDCState:'Benificiary Confirmation', startDate:'Sep 6, 2019 12:00:00 AM', endDate:'Sep 6, 2019 12:00:00 AM'},
            {sort: 4, sortOrderOfDCState:'Product Readiness', startDate:'Sep 6, 2019 12:00:00 AM', endDate:'Sep 6, 2019 12:00:00 AM'},
            {sort: 5, sortOrderOfDCState:'Freight Forwarder booking', startDate:'Sep 6, 2019 12:00:00 AM', endDate:'Sep 6, 2019 12:00:00 AM'},
            {sort: 6, sortOrderOfDCState:'XO export', startDate:'Sep 6, 2019 12:00:00 AM', endDate:'Sep 6, 2019 12:00:00 AM'},
            {sort: 7, sortOrderOfDCState:'Freight Forwarder product pick from supplier', startDate:'Sep 6, 2019 12:00:00 AM', endDate:'Sep 6, 2019 12:00:00 AM'},
            {sort: 8, sortOrderOfDCState:'Pre shipment inspection', startDate:'Sep 6, 2019 12:00:00 AM', endDate:'Sep 6, 2019 12:00:00 AM'},
            {sort: 9, sortOrderOfDCState:'Pre shipment inspection', startDate:'Sep 6, 2019 12:00:00 AM', endDate:'Sep 6, 2019 12:00:00 AM'},
            {sort: 10, sortOrderOfDCState:'Pre shipment inspection', startDate:'Sep 6, 2019 12:00:00 AM', endDate:'Sep 6, 2019 12:00:00 AM'},
            {sort: 11, sortOrderOfDCState:'DC Opening', startDate:'Sep 6, 2019 12:00:00 AM', endDate:'Sep 6, 2019 12:00:00 AM'},
            {sort: 12, sortOrderOfDCState:'Send to foreign bank', startDate:'Sep 6, 2019 12:00:00 AM', endDate:'Sep 6, 2019 12:00:00 AM'},
            {sort: 13, sortOrderOfDCState:'Benificiary Confirmation', startDate:'Sep 6, 2019 12:00:00 AM', endDate:'Sep 6, 2019 12:00:00 AM'},
            {sort: 14, sortOrderOfDCState:'Product Readiness', startDate:'Sep 6, 2019 12:00:00 AM', endDate:'Sep 6, 2019 12:00:00 AM'},
            {sort: 15, sortOrderOfDCState:'Freight Forwarder booking', startDate:'Sep 6, 2019 12:00:00 AM', endDate:'Sep 6, 2019 12:00:00 AM'},
            {sort: 16, sortOrderOfDCState:'XO export', startDate:'Sep 6, 2019 12:00:00 AM', endDate:'Sep 6, 2019 12:00:00 AM'},
            {sort: 17, sortOrderOfDCState:'Freight Forwarder product pick from supplier', startDate:'Sep 6, 2019 12:00:00 AM', endDate:'Sep 6, 2019 12:00:00 AM'},
            {sort: 18, sortOrderOfDCState:'Pre shipment inspection', startDate:'Sep 6, 2019 12:00:00 AM', endDate:'Sep 6, 2019 12:00:00 AM'},
            ],
        }
    },
    methods:{
        formatedDate(){
            this.timeLine.forEach((item)=>{
                if (item.startDate) {
                    item.startDate = moment(new Date(item.startDate)).format("MMM DD, YYYY")
                }
                if (item.endDate) {
                    item.endDate = moment(new Date(item.endDate)).format("MMM DD, YYYY")
                }
            });
        }
    },
	mounted() {
        this.formatedDate();
		new Swiper('.swiper-container', {
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},
			slidesPerView: 5,
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
.timeline{
    transition: all 0.3s;
    padding-bottom: 55px;
    border-bottom: 10px solid #0684c2;
    margin: 0 0 50px 0;
}
.event h1{
    max-width: 70px;
    max-height: 70px;
    min-width: 70px;
    min-height: 70px;
}
.event {
    max-width: 200px;
    max-height: 200px;
    min-width: 200px;
    min-height: 200px;
    display: block;
    background: #caecfd;
    padding: 1em;
    border-radius: 5px;
    margin: 0 1em 0 1em;
    transition: all 0.3s;
    box-shadow: 0 0 5px #ccc;
    color: #0d151a;
    text-align: center;
}

.event:hover {
    background: #98dbfc;
    box-shadow: 0px 0px 10px #ccc;
    transform-origin: 100px 0px;
    transform: rotate(-10deg);
    z-index: 2;
}
.event:hover::after {
    border-color: #046291;
    z-index: 2;
}
.event::after {
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
</style>
