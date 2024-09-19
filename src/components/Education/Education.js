import React from 'react'
import schoolimg from "../../Assets/kautilya-education-academy-shajapur-47867032.jpg"
import collegeimg from "../../Assets/e5da3ce6-23ff-4b78-907c-f79502fbd6f1_1686666711740.jpg"
import collegeimg1 from "../../Assets/1601464787phpPz9ntc.jpeg"
const Education = () => {
  return (
    <section class="education" id="education">

  <h1 class="education-heading"><i class="fas fa-graduation-cap"></i> My <span>Education</span></h1>

    <p class="qoute">Education is not the learning of facts, but the training of the mind to think.</p>

    <div class="box-container">

    <div class="box">
        <div class="image">
        <img draggable="false" src={collegeimg} alt=""/>
        </div>
        <div class="content">
        <h3> Master of Science in Physics</h3>
        <p>Jawaharlal Nehru Smriti Government Post Graduate College Shujalpur M.P. | Vikram University, Ujjain</p>
        <h4>2022-2024 | Completed</h4>
        </div>
    </div>

    <div class="box">
        <div class="image">
        <img draggable="false" src={collegeimg1} alt=""/>
        </div>
        <div class="content">
        <h3>Bachelor of Science (BSc)</h3>
        <p>Bherulal Patidar Government PG College | DAVV, indore</p>
        <h4>2018-2021 | Completed</h4>
        </div>
    </div>

    <div class="box">
      <div class="image">
      <img draggable="false" src={schoolimg} alt=""/>
      </div>
      <div class="content">
      <h3>HSC Science | Informatic Practices</h3>
      <p>kautilya education academy shajapur | CBSE</p>
      <h4>2015-2017 | Completed</h4>
      </div>
    </div>

</div>
</section>
  )
}

export default Education
