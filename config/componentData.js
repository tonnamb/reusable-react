module.exports = [{"name":"EyeIcon","description":"SVG Eye Icon","code":"import React from 'react';\n\n/** SVG Eye Icon */\nfunction EyeIcon() {\n  // Attribution: Fabián Alexis at https://commons.wikimedia.org/wiki/File:Antu_view-preview.svg\n  return (\n    <svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 22 22\">\n      <g transform=\"matrix(.02146 0 0 .02146 1 1)\" fill=\"#4d4d4d\">\n        <path d=\"m466.07 161.53c-205.6 0-382.8 121.2-464.2 296.1-2.5 5.3-2.5 11.5 0 16.9 81.4 174.9 258.6 296.1 464.2 296.1 205.6 0 382.8-121.2 464.2-296.1 2.5-5.3 2.5-11.5 0-16.9-81.4-174.9-258.6-296.1-464.2-296.1m0 514.7c-116.1 0-210.1-94.1-210.1-210.1 0-116.1 94.1-210.1 210.1-210.1 116.1 0 210.1 94.1 210.1 210.1 0 116-94.1 210.1-210.1 210.1\" />\n        <circle cx=\"466.08\" cy=\"466.02\" r=\"134.5\" />\n      </g>\n    </svg>\n  )\n}\n\nexport default EyeIcon;\n","examples":[{"name":"Example","description":"","code":"import React from 'react';\nimport EyeIcon from 'ps-react/EyeIcon';\n\nexport default function EyeIconExample() {\n  return <EyeIcon />;\n}\n"}]},{"name":"HelloWorld","description":"A super lame component that says Hello with a custom message.","props":{"message":{"type":{"name":"string"},"required":false,"description":"Message to display","defaultValue":{"value":"'World'","computed":false}}},"code":"import React from 'react';\nimport PropTypes from 'prop-types';\n\n/** A super lame component that says Hello with a custom message. */\nfunction HelloWorld({message}) {\n  return <div>Hello {message}</div>\n}\n\nHelloWorld.propTypes = {\n  /** Message to display */\n  message: PropTypes.string\n};\n\nHelloWorld.defaultProps = {\n  message: 'World'\n};\n\nexport default HelloWorld;\n","examples":[{"name":"ExampleHelloWord","description":"Custom message","code":"import React from 'react';\nimport HelloWorld from 'ps-react/HelloWorld';\n\n/** Custom message */\nexport default function ExampleHelloWorld() {\n  return <HelloWorld message=\"Pluralsight viewers!\" />\n}\n"}]},{"name":"Label","description":"Label with required field display, htmlFor, and block styling","props":{"htmlFor":{"type":{"name":"string"},"required":true,"description":"HTML ID for associated input"},"label":{"type":{"name":"string"},"required":true,"description":"Label text"},"required":{"type":{"name":"bool"},"required":false,"description":"Display asterisk after label if true"}},"code":"import React from 'react';\nimport PropTypes from 'prop-types';\n\n/** Label with required field display, htmlFor, and block styling */\nfunction Label({htmlFor, label, required}) {\n  return (\n    <label style={{display: 'block'}} htmlFor={htmlFor}>\n      {label} { required && <span style={{color: 'red'}}> *</span> }\n    </label>\n  )\n}\n\nLabel.propTypes = {\n  /** HTML ID for associated input */\n  htmlFor: PropTypes.string.isRequired,\n\n  /** Label text */\n  label: PropTypes.string.isRequired,\n\n  /** Display asterisk after label if true */\n  required: PropTypes.bool\n};\n\nexport default Label;\n","examples":[{"name":"ExampleOptional","description":"Optional label","code":"import React from 'react';\nimport Label from 'ps-react/Label';\n\n/** Optional label */\nexport default function ExampleOptional() {\n  return <Label htmlFor=\"test\" label=\"text\" />\n}"},{"name":"ExampleRequired","description":"Required label","code":"import React from 'react';\nimport Label from 'ps-react/Label';\n\n/** Required label */\nexport default function ExampleRequired() {\n  return <Label htmlFor=\"test\" label=\"text\" required />\n}"}]},{"name":"ProgressBar","description":"","props":{"percent":{"type":{"name":"number"},"required":true,"description":"Percent of progress completed"},"width":{"type":{"name":"number"},"required":true,"description":"Bar width"},"height":{"type":{"name":"number"},"required":false,"description":"Bar height","defaultValue":{"value":"5","computed":false}}},"code":"import React from 'react';\nimport PropTypes from 'prop-types';\n\nclass ProgressBar extends React.Component {\n  getColor = (percent) => {\n    if (percent === 100) return 'green';\n    return percent > 50 ? 'lightgreen' : 'red';\n  }\n\n  getWidthAsPercentOfTotalWidth = () => {\n    return parseInt(this.props.width * (this.props.percent / 100), 10);\n  }\n\n  render() {\n    const {percent, width, height} = this.props;\n    return (\n      <div style={{border: 'solid 1px lightgray', width: width}}>\n        <div style={{\n          width: this.getWidthAsPercentOfTotalWidth(),\n          height,\n          backgroundColor: this.getColor(percent)\n        }} />\n      </div>\n    );\n  }\n}\n\nProgressBar.propTypes = {\n  /** Percent of progress completed */\n  percent: PropTypes.number.isRequired,\n\n  /** Bar width */\n  width: PropTypes.number.isRequired,\n\n  /** Bar height */\n  height: PropTypes.number\n};\n\nProgressBar.defaultProps = {\n  height: 5\n};\n\nexport default ProgressBar;\n","examples":[{"name":"Example100Percent","description":"100% progress and height 20px","code":"import React from 'react';\nimport ProgressBar from 'ps-react/ProgressBar';\n\n/** 100% progress and height 20px */\nexport default function Example10Percent() {\n  return <ProgressBar percent={100} width={150} height={20} />\n}\n"},{"name":"Example10Percent","description":"10% progress","code":"import React from 'react';\nimport ProgressBar from 'ps-react/ProgressBar';\n\n/** 10% progress */\nexport default function Example10Percent() {\n  return <ProgressBar percent={10} width={150} />\n}"},{"name":"Example70Percent","description":"70% progress","code":"import React from 'react';\nimport ProgressBar from 'ps-react/ProgressBar';\n\n/** 70% progress */\nexport default function Example10Percent() {\n  return <ProgressBar percent={70} width={150} />\n}"}]}]