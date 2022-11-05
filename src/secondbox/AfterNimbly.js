import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import Brightness6TwoToneIcon from '@mui/icons-material/Brightness6TwoTone';


function AfterNimbly() {
  return (

      <div className="after-nimbly">

        <h2 id='education'><Brightness6TwoToneIcon className="fa-icon certificate" fontSize='36px'/> Education </h2>
        <div className="bachelor">
        <h5 className='topproject-header'> Bachelor's Degree | Accra Institute of Technology, Ghana</h5>

        <p className="micro"><CalendarMonthOutlinedIcon className="fa-icon calender"/>2013- 2016 </p>

        <h4 className='overall' > Overall Best Graduating Student award </h4>

        <ul>
          <li className="project-list"> First-Class Degree in Computer Science </li>
          <li className="project-list"> Data Structure & Algorithm </li>
          <li className="project-list"> Artificial Intelligence, Machine Learning & Expert System</li>
          <li className="project-list"> Computer Vision </li>
          <li className="project-list"> Computer Graphics & Animation </li>
          <li className="project-list"> Worked as Web-Developer at School IT Department </li>
          <li className="project-list"> Developed summer class management system </li>
          <li className="project-list"> Championed Official School website Re-Development</li>
        </ul>
        </div>
        <hr/>
        <div className="diploma">
          <h5 className='topproject-header'> Diploma | Highland College of Technology, Nigeria</h5>
          <p className="micro"><CalendarMonthOutlinedIcon className="fa-icon calender"/>2010-2012 </p>
          <ul>
            <li className="project-list"> Upper Credit in Software Engineering </li>
            <li className="project-list">Took classes in C++, Java, PHP, Database(SQL Sever, Mysql),Virtual Basic </li>
            <li className="project-list"> Developed eLibrary system </li>
            <li className="project-list"> Developed JAMB Exam CBT System </li>
          </ul>
        </div> {/* End of diploma */}
        <hr/>
        <div className="machine-learning">
          <h5 className='topproject-header'> Machine Learning | Coursera</h5>
          <p className="micro"><CalendarMonthOutlinedIcon className="fa-icon calender"/>2016
          </p>
          <p className="last"> AI & Machine Learning </p>
        </div> {/* End of machine-learning */}

        <div className="system-security">
          <h5 className='topproject-header'> System Security | ISACA</h5>
          <p className="micro "> <CalendarMonthOutlinedIcon className="fa-icon calender"/> 2015</p>
          <p className="last"> System Security Awareness</p>
        </div> {/* End of system-security */}

      </div>


  );
}

export default AfterNimbly;
