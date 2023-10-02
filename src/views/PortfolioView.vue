<template>
    <div class="portfolio-view">
        <h2>Education</h2>
        <ul>
            <li>
                <b>Bachelor of Information Technology</b><br />
                Deakin University, Burwood<br />
                March/2023 – Expected completion date: November 2025<br />
                Achievements: #c, c++, Python, Java, Html
            </li> 
            <li>
                <b>DAV Public School</b><br />
                Amritsar, India<br /> 
                March/2019 – June/2022<br />
            </li>
        </ul>

        <h2>Employment</h2>
        <ul>
            <li>
                <b>TEAM MEMBER – Dench Bakery</b><br />
                (March 2023 - Present)
                <ul>
                    <li>Trained in packaging and labeling.</li>
                    <li>Specialized in training and mentoring new hires.</li>
                    <li>Managed the inventory.</li>
                    <li>Paid attention to detail and took feedback positively.</li>
                </ul>
            </li>

            <li>
                <b>VOLUNTEER – SCHOOL EVENTS</b><br />
                (2019 - 2022)
                <ul>
                    <li>Assisted in organizing and running school events such as fundraisers, sports days, and cultural events.</li>
                    <li>Provided excellent customer service to event attendees and ensured their needs were met.</li>
                    <li>Demonstrated leadership skills by supervising and training a team of volunteers to ensure successful event execution.</li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'PortfolioView',
};
</script>

<style scoped>
.portfolio-view {
    text-align: left;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    color: #333;
}

h2 {
    font-size: 24px;
    margin-top: 20px;
    color: #555;
}

ul {
    list-style-type: disc;
    margin-left: 20px;
}

li {
    margin-bottom: 15px;
    color: #555;
}

li ul {
    list-style-type: circle;
    margin-left: 20px;
    margin-top: 5px;
    color: #555;
}
</style>
