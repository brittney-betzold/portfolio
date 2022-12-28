import React from 'react'
import './Skills.css'
import { Typography } from '@material-ui/core'
import Icon from '@mdi/react'
import { mdiBootstrap, mdiDatabase, mdiJquery, mdiLanguageCss3, mdiLanguageHtml5, mdiLanguageJavascript, mdiLeaf, mdiMicrosoftVisualStudio, mdiNodejs, mdiReact } from '@mdi/js'

export default function Skills() {
  return (

    <div className="container skillcomponent">

      <Typography color="textPrimary" gutterBottom variant="h2" align="center">
        Development Skills
      </Typography>

      <div className="skill-box">
        <span className=' title '> <Icon path={mdiLanguageHtml5}
          title="mongoDB"
          size={1}
          color="orange" /> HTML5</span>
        <div className="skill-bar">
          <span className="skill-per html">
            <span className="tooltip">100%</span>
          </span>
        </div>
      </div>

      <div className="skill-box">
        <span className='title'> <Icon path={mdiLanguageCss3}
          title="mongoDB"
          size={1}
          color="darkblue" /> CSS </span>
        <div className="skill-bar">
          <span className="skill-per css">
            <span className="tooltip">100%</span>
          </span>
        </div>
      </div>

      <div className="skill-box">
        <span className='title'> <Icon path={mdiBootstrap}
          title="mongoDB"
          size={1}
          color="purple" /> BootStrap </span>
        <div className="skill-bar">
          <span className="skill-per bootstrap">
            <span className="tooltip">95%</span>
          </span>
        </div>
      </div>

      <div className="skill-box">
        <span className='title'> <Icon path={mdiLanguageJavascript}
          title="mongoDB"
          size={1}
          color="black" /> JavaScript </span>
        <div className="skill-bar">
          <span className="skill-per JavaScript">
            <span className="tooltip">85%</span>
          </span>
        </div>
      </div>

      <div className="skill-box">
        <span className='title'> <Icon path={mdiJquery}
          title="mongoDB"
          size={1}
          color="darkblue" /> JQuery </span>
        <div className="skill-bar">
          <span className="skill-per JQuery">
            <span className="tooltip">75%</span>
          </span>
        </div>
      </div>

      <div className="skill-box">
        <span className='title'> <Icon path={mdiNodejs}
          title="mongoDB"
          size={1}
          color="green" /> NodeJS</span>
        <div className="skill-bar">
          <span className="skill-per NodeJS">
            <span className="tooltip">85%</span>
          </span>
        </div>
      </div>

      <div className="skill-box">
        <span className='title'> <Icon path={mdiReact}
          title="mongoDB"
          size={1}
          color="darkblue" /> ReactJS </span>
        <div className="skill-bar">
          <span className="skill-per react">
            <span className="tooltip">70%</span>
          </span>
        </div>
      </div>

      <div className="skill-box">
        <span className='title'> <Icon path={mdiDatabase}
          title="mongoDB"
          size={1}
          color="gray" /> MySQL </span>
        <div className="skill-bar">
          <span className="skill-per mysql">
            <span className="tooltip">60%</span>
          </span>
        </div>
      </div>

      <div className="skill-box">
        <span className='title'> <Icon path={mdiLeaf}
          title="mongoDB"
          size={1}
          color="green" /> MongoDB </span>
        <div className="skill-bar">
          <span className="skill-per mongodb">
            <span className="tooltip">50%</span>
          </span>
        </div>

      </div>
    </div>



  )
}

