import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import  { useContext, createContext } from 'react';
import { useEffect } from 'react';

export const UserContext = createContext();
function App() {
  const [isButtonClicked, setButtonClicked] = useState(false);
  const handleButtonClick = () => {
    setButtonClicked(!isButtonClicked);
  }

    const[showPopup, setShowPopup] = useState(false);
        //update Gembucket
     
        const [data, setData] = useState({
        show: true,
        name: 'Gembucket',
        keyword: ['#solar_breeze'
        ,'#red_hood'
        ,'#card_guard'
        ,'#lotstring'
        ,'#tough_joy_fax'
        ,'#cardify'],
        
        summary: 'Tellus in sagittis dui vel nisl duis ac nibh fusce lacus'
        +' purus aliquet at neque aenean auctor gravida sem praesent'
        +' id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio feugiat non pretium quis lectus suspendisse.',
        websites: 'https://gembucket.com',
        Ofiicalsite: '',
       
      
        
        });
        const handleDelete = () => {
          setData({
            show: true,
            name: 'Gembucket',
            keyword: ['#solar_breeze'
            ,'#red_hood'
            ,'#card_guard'
            ,'#lotstring'
            ,'#tough_joy_fax'
            ,'#cardify'],
            
            summary: 'Tellus in sagittis dui vel nisl duis ac nibh fusce lacus'
            +' purus aliquet at neque aenean auctor gravida sem praesent'
            +' id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio feugiat non pretium quis lectus suspendisse.',
            websites: '',
            Ofiicalsite: '',
    
          });
        };
        
        useEffect(() => {
          console.log(data);
        }, [data]);
        
        const [newKeyword, setNewKeyword] = useState('');

 
        const handleSubmit = (e) => {
        e.preventDefault();
        setData((prevData) => ({
        ...prevData,
        name: e.target.name.value,
        keyword: [...data.keyword, newKeyword],
        summary: e.target.summary.value,
        websites: e.target.websites.value,
        officialSite: e.target.officialSite.value,
        show: false,
        }));
        setNewKeyword('');
        };

        const handleSubmit2 = (event) => {
          event.preventDefault();
          setData({ ...data, keyword: [...data.keyword, newKeyword] });
          setNewKeyword('');
        };
        const handleDeleteKeyword = (index) => {
          const newKeywords = [...data.keyword];
          newKeywords.splice(index, 1);
          setData({
            ...data,
            keyword: newKeywords,
          });
        };
       
            
            
            let officialSiteDisplay;
            switch (data.officialSite) {
              case '1':
                officialSiteDisplay = 'Gembucket';
                break;
              case '2':
                officialSiteDisplay = 'Other';
                break;
              case '3':
                officialSiteDisplay = 'Other3';
                break;
              default:
                officialSiteDisplay = 'https://gembucket.com';
            }
            
          
    
  return (
    <div>
               {/* Pop-up Components */}
               <UserContext.Provider value={{ data, setData }}>
              
      {showPopup && (
        <div>
          {/* Gembucket - Popup */}
          <form onSubmit={handleSubmit}>
        <div id="xmas-popup" className="popup" href="#">
        <div className="popup-content">
          <div className="nd-popup">
            <h1>Project</h1>
            <h2>Name *</h2>
            <input className="input1" type="text" name='name'  placeholder='Gembucket'/>
            <h2>Keywords *</h2>
            <input className="input1" type="text"  name='keyword' 
             value={newKeyword}
             onChange={(event) => setNewKeyword(event.target.value)}/>
             
            <div className="keytag">
            {data.keyword.map((keyword, index) => (
        <p key={index}>
          {keyword}
          <button onClick={() => handleDeleteKeyword(index)}>x</button>
        </p>
           ))}
            </div>

            <h2 id="summ">Summary *</h2>
            <textarea name="summary" cols={60} rows={30} style={{fontFamily: '"Manjari", sans-serif', padding: '10px'}} placeholder={"Tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio\tfeugiat non pretium quis lectus suspendisse."} />
            <h2>Websites</h2>
            <div className="websites">
              <input type="text"  name='websites' placeholder='https://gembucket.com'/>
              <select name='officialSite'>
                <option value="0">Official site</option>
                <option value="1">Gembucket</option>
              <option value="2">Other</option>
                    <option value="3">Other3</option>
              </select>
              <button type="button" onClick={handleButtonClick}>   {isButtonClicked ? 'Done' : 'Remove'}</button>
              <button id="aaw">Add another webside</button>
            </div>
            <div id="c-s">
              <button id="cancel"><a href="#" id="out" className="close">Cancel</a></button>
              <button type="submit" id='save'>Save</button>
            </div>
          </div>
        </div>
      </div>
   
     
                   
      {/* Description - Popup */}
      <div id="xmas-popup2" className="popup" href="#">
        <div className="popup-content">
          <div className="nd-popup2">
            <h1>Description</h1>
            <div className="toolbar" />
           
               
     
              <textarea>

              </textarea>
              
            <div id="c-s">
              <button id="cancel"><a href="#" id="out" className="close">Cancel</a></button>
              <button id="save">Save</button>
            </div>
          </div>
        </div>
      </div>
      {/* // Features - Popup */}

      <div id="xmas-popup3" className="popup" href="#">
        <div className="popup-content">
          <h1>Features</h1>
          <div className="nd-popup3">
            <div className="box" id="box1">
              <img src="/img/test1.png" />
              <div className="fill">
                <h2>Titles *</h2>
                <input className="input-features" type="text"  placeholder='User research'/>
                <h2>Description *</h2>
                <textarea defaultValue={"Metus vitae durea nullam ipsum aliquam non mauris morbi non lectus aliquam sit amet aliquam dieam earn magna bibendum imperdiet nullam orci pede."} />
              </div>
            </div>
            <div className="box">
              <img src="/img/Rectangle 2.1.png" />
              <div className="fill">
                <h2>Titles *</h2>
                <input className="input-features" type="text"  placeholder='Getting stakeholder'/>
                <h2>Description *</h2>
                <textarea defaultValue={"Ipsum ac tellus semper interdum mauris libero ullamcorper purus sit amet nulla quisque arcu libero rustrum sempereed ac lobortis vel dapibus at."} />
              </div>
            </div>
            <div className="box">
              <img src="/img/test3.png" />
              <div className="fill">
                <h2>Titles *</h2>
                <input className="input-features" type="text" placeholder='User interaction' />
                <h2>Description</h2>
                <textarea defaultValue={"Sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt anteca veal ipsum praesent blandit lacinia erat vestibulum sed at magna."} />
              </div>
            </div>
          </div>
          <div id="control">
            <button id="aaf">Add another feature</button>
            <div id="c-s">
              <button id="cancel"><a href="#" id="out" className="close">Cancel</a></button>
              <button type='submit' id="save">submit </button>
            </div>
          </div>
        </div>
      </div>
      </form>   
</div>




        
)}
    {/* webside */}
    <div className="container">
      <div className="to">
        <div className="mb">
          <img src="/img/Group 13.svg" alt='2'/>
          <div className="avt">
            <img src="/img/Ellipse.svg" alt="" id="avatar" />
            <div className='fullname'>
              <p className="c1">Pattie Trusdale</p>
              <p className="c2">Full-stack Developer</p>
            </div>
          </div>
        </div>
        <div className="nb">
          <p className="hide">HIDE</p>
        </div>
      </div>
      <div className="main-title">
        <div className="title1">
          <div className="tf">
            <p>{data.name}</p>
            <a href="#xmas-popup" className="button" onClick={() => setShowPopup(true)}> <img src="/img/Group 53.svg" alt="" /></a>
          </div>
          <div className="tagname">
          {data.keyword.map((keyword, index) => (
        <p key={index}>
          {keyword}
          
        </p>
           ))}
            <br />
          </div>
          <div className="content">
            <p className="subc1">{data.summary} </p>
            <br />
            <p className="subc2">Official site:<a href="#">{officialSiteDisplay}</a></p>
          </div>
          <br />
          <div className="rectangle">
            <img src="\img\Group 210.svg" />
          </div>
        </div>
        <div className="title2">
          <div className="tf">
            <p>Description</p>
            <a href="#xmas-popup2" className="button">
              <img src="/img/Group 53.svg" alt="" />
            </a>
          </div>
          <div className="dc">
            <div className="cham">
              <p />
            </div>
            <div className="write"><p>Dugue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel nasand praesent blandit lacinia erat vestibulum sed.</p></div>  
          </div>
          <div className="dc">
            <div className="cham">
              <p />
            </div>
            <div className="write"><p>Augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere.</p></div>  
          </div>
          <div className="dc">
            <div className="cham">
              <p />
            </div>
            <div className="write"><p>Liam neque vestibulum eget vulputate ut ultrices vel.</p></div>  
          </div>
        </div>
        <div className="title2">
          <div className="tf">
            <p>Features</p>
            <a href="#xmas-popup3" className="button">
              <img src="/img/Group 53.svg" alt="" />
            </a>
          </div>
          <div className="tes">
            <img className="us" src="/img/Group 41.svg" />
            <img className="gs" src="/img/Group 40.svg" />
            <img className="ui" src="/img/Group 39.svg" />
          </div>
          <div className="form2">
            <p id="p1">User research</p>
            <div className="f1">
              <img src="/img/Rectangle 23.svg" />
              <div className=" div-ic">
                <p className="ic">
                  Metus vitae durea nullam ipsum aliquam non mauris morbi non lectus aliquam sit amet aliquam dieam earn 
                  magna bibendum imperdiet nullam orci pede.
                </p>
              </div>
              <p className="line" />
            </div>
            <p id="p2">Getting stakeholder</p>
            <div className="f2">
              <img src="/img/Rectangle 2.1.png" id="i2" />
              <div className=" div-ic">
                <p className="ic2">
                  Ipsum ac tellus semper interdum mauris libero ullamcorper purus sit amet nulla quisque arcu libero rustrum sempereed ac lobortis vel dapibus at.
                </p>
              </div>
              <p className="line2" />
            </div>
            <p id="p3">User interaction</p>
            <div className="f3">
              <img src="/img/Rectangle 2.svg" />
              <div className=" div-ic">
                <p className="ic3">
                  Sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt anteca veal ipsum praesent blandit lacinia erat vestibulum sed at magna.
                </p>
              </div>
              <p className="line3" />
            </div>
          </div>
        </div>
        <div className="title4">
          <p>Team-members</p>
          <div className="team">
            <img src="/img/Group 44.svg" />
            <img src="/img/Group 45.svg" />
            <img src="/img/Group 46.svg" />
            <img src="/img/Group 66.svg" />
          </div>
        </div>
        <div className="title5">
          <p>Want to know more, contact me!</p>
          <div className="contact">
            <div className="co1">
              <div className="addr">
                <img src="icon/mail.svg" alt="" /><a>pattietrusdale@gmail.com</a><br />
                <img src="icon/call.svg" alt="" /><a>+8421 223 2234</a><br />
                <div id="img3">
                  <img src="/icon/mark.svg" alt="" /><a>34 Milwaukee Avenue</a>
                </div>
              </div>
            </div>
            <div className="contacts">
              <div className="co2">
                <div className="addr2">
                  <div className="i" id="s3">
                    <img src="/icon/github.svg" alt="" /><a>github.com/pattietrusdale</a><br />
                  </div>
                  <div className="i">
                    <img src="/icon/link.svg" alt="" /><a>linkedin.com/in/pattie-trusdale-34...</a><br />
                  </div>
                  <div className="i">
                    <img src="/icon/fb.svg" alt="" /><a>facebook.com/pattie.trusdale</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer">
      <h4 className="con">
        <p className="p1">Copyright 2019 © Academic System</p>
        <p className="p2">Designed &amp; Developed by Quang Dat Pham</p>
      </h4>
    </div>

    </UserContext.Provider>

  </div>
  );
  
}

export default App;
