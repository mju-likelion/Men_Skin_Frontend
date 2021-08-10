import React from "react";
import { ColorExtractor } from "react-color-extractor";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";



const IMAGE_STYLES = { width: 700, height: 500, display: "none" };

const Section = styled.body`
  background-color: #252525;
  width: 1920px;
  height: 100%;
  margin: 0;
  padding: 0;
  position:absolute; 
  top: 0px;
  left: 0px;
`;
const Logo = styled.img`
  position:absolute; 
  left: 858px;
`;
const Upload = styled.img`
  left: 175px;
  top: 246px;
  position:absolute; 
`;
const Line = styled.img`
  left: 960px;
  top: 246px;
  position:absolute;
  height: 650px;
`;
const Button1 = styled.div`
  position: absolute;
  width: 600px;
  height: 110px;
  left: 158px;
  top: 802px;

  background: #FFFFFF;
  border-radius: 50px;

  position: absolute;


  font-family: Georgia;

  font-size: 40px;
  line-height: 78px;
  text-align: center;

  color: #000000;

`;
const Button2 = styled.div`
  position: absolute;
  width: 600px;
  height: 110px;
  left: 1120px;
  top: 802px;

  background: #FFFFFF;
  border-radius: 50px;

  position: absolute;


  font-family: Georgia;

  font-size: 40px;
  line-height: 78px;
  text-align: center;

  color: #000000;

`;
const Explanation = styled.img`
  left: 1124px;
  top: 183px;
  position: absolute;
`;

const Plus = styled.p`
  display: inline-block;
  font-size: 100px;
  margin: 0;
  position: absolute;
  left: 50%;
  top: 46%;
  transform: translate(-50%, -50%);
  text-align: center;
`;


export class FindPresenter extends React.Component {


  state = {
    file: "",
    previewURL: "",
    colors: [],
    save: [],
    result: 0,
    rgbChange: ""

  };

  componentDidMount() {
    AOS.init({
      duration: "",
    });
  }

  handleFileOnChange = (event) => {
    if (this.state.previewURL !== "") {
      this.setState({
        file: "",
        previewURL: "",

      });
    } else {
      event.preventDefault();
      let reader = new FileReader();
      let file = event.target.files[0];


      //let imgData = "";
      // console.log(file);
      reader.onloadend = () => {
        localStorage.setItem("imgURL", reader.result);
        this.setState({
          file: file,
          previewURL: reader.result,

        });
      };


      reader.readAsDataURL(file);

    }
  };
  clickEvent = (color,e) => {
    const rgbChange = this.hexToRgb(color);



    

    if(0< rgbChange.R &&rgbChange.R <= 229){
      this.setState({
        result: 24

      });
      alert("고객님의 피부 타입 진단을 완료했습니다. \n 아래 result 버튼을 눌러주세요!")
    }
    else if(229< rgbChange.R && rgbChange.R <= 236 ){
      this.setState({
        result: 23

      });
      alert("고객님의 피부 타입 진단을 완료했습니다. \n 아래 result 버튼을 눌러주세요!")
    }
    else if(236 < rgbChange.R && rgbChange.R <= 243 ){
      this.setState({
        result: 21

      });
      alert("고객님의 피부 타입 진단을 완료했습니다. \n 아래 result 버튼을 눌러주세요!")
    }
    else if(243< rgbChange.R && rgbChange.R <= 255 ){
      this.setState({
        result: 13

      });
      alert("고객님의 피부 타입 진단을 완료했습니다. \n 아래 result 버튼을 눌러주세요!")



    }


  };

  hexToRgb = (hex) => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      R: parseInt(result[1], 16),
      G: parseInt(result[2], 16),
      B: parseInt(result[3], 16)
    } : null;
    
  };



  renderSwatches = () => {
    const { colors } = this.state;


    return colors.map((color, id) => {
      console.log(id)

      return (

        <button data-aos="fade-left" onClick= {(e) => this.clickEvent(color, e)}
          key={id}
          style={{
            backgroundColor: color,
            width: 100,
            height: 100,
            marginLeft: 10,
            
          }}

        ></button>



      );

    });
  };




  getColors = colors =>
    this.setState(state => ({ colors: [...state.colors, ...colors] }));

  render() {
    return (
      <Section>

        




        <Link to="/">
          <Logo className="Logo_image" alt="Logo_image" src="img/logo.png" width="205" height="198" />
        </Link>





        <Line src="img/Find_Line.png" />
        <Button1>upload image
          <input
            type="file"
            accept="image/jpg,impge/png,image/jpeg,image/gif"
            name="upload_img"
            onChange={this.handleFileOnChange}
            style={{
              width: "600px", height: "110px",
              position: "absolute", left: "20px", top: "0"

            }}
            id="input-file"
          />

        </Button1>

        {this.state.previewURL !== "" ? (
          <Upload
            //이미지가 업로드 되었다면 업로드된 이미지로 올려잇!
            src={this.state.previewURL}
            alt="nonUpload"
            style={{ width: "595px", height: "504px", zIndex: 2 }}
            id="panel"
          ></Upload>


        ) : (
          <Upload
            //그게 아니라면 기본 이미지
            src="img/Upload.png"
            alt="Upload"
            style={{ width: "595px", height: "504px" }}
            id="img"
            
            
          ></Upload>
        )}

        <Explanation src="img/Explanation.png" />
        {this.state.previewURL === "" ? (
          <div></div>

        ) : (
          <>

            {/* <Button2 >Color extraction</Button2> */}
            <div style={{ marginTop: 600, display: "flex", marginLeft: 1100 }}>{this.renderSwatches()}</div>
          </>
        )}
        <div>
          <ColorExtractor  getColors={this.getColors}>
            <img src={this.state.previewURL} style={IMAGE_STYLES} />
          </ColorExtractor>
          <div style={{ color: "white" }}>{this.clickEvent}</div>
          
          {this.state.result !== 0 ? (
          <Link to={`/FindDetail/${this.state.result}`}>
            <Button2
            //색상추출되면 버튼 활성화 시켜이이잇!
 
          >result</Button2>
          </Link>


        ) : (
          <Button2
            //색상추출 아직이면 버튼 비활성화 시켜이이잇!
            style={{ display:"none" }}

            
            
          ></Button2>
        )}
          




        </div>
        



      </Section>



    );


  }
}



