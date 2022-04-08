import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
@font-face {
	font-family: mypagefont;
	src: url('./mypagefont.ttf');
}
`

export const Styled = {
	ShopReviewPlusButton: styled.button`
		margin: 5px 5px;
		width: 98%;
		border: none;
		background-color: white;
	`,
	Wrapper: styled.div`
		display: flex;
		flex-direction: column;
		margin-left: auto;
		margin-right: auto;
		width: 100%;
		hegith: 5px;
		position: relative;
		@media (max-width: 1200px) {
			width: 100%;
		}
		@media (max-width: 750px) {
			width: 100%;
		}
		@media (max-width: 700px) {
			width: 100%;
		}
	`,

	CommentWrapper: styled.div`
		position: relative;
		width: 100%;
		height: auto;
		border-radius: 20px;
		margin-bottom: 5%;
		box-shadow: 4px 4px 4px rgb(85, 85, 85);
		transition: all 0.1s ease-in-out;
		&:hover {
			color: black;
			box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
				7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
			transform: scale(1.02);
		}
		&:hover:after {
			left: 0;
			width: auto;
		}
	`,

	Comment: styled.div`
		font-family: mypagefont;
		position: relative;
		display: grid;
		width: 100%;
		height: auto;
		grid-template-columns: 1fr 3fr 0.5fr;
		border-radius: 20px;
		white-space: nowrap;
		@media (max-width: 500px) {
			grid-template-columns: 1fr 3fr 0.8fr;
		}
	`,

	Date: styled.div`
		position: absolute;
		bottom: 5%;
		right: 5%;
		color: gray;
		font-size: 0.8rem;
	`,

	ProfileBox: styled.form`
		position: relative;
		width: 100%;
		height: 100%;
		margin-left: auto;
		margin-right: auto;
		margin-top: 20%;
		margin-bottom: auto;

		@media (max-width: 768px) {
			width: 100%;
			height: 50%;
		}
		@media (max-width: 640px) {
			width: 100%;
			height: 45%;
		}
		@media (max-width: 535px) {
			width: 100%;
			height: 40%;
		}
		@media (max-width: 470px) {
			width: 100%;
			height: 40%;
		}
		@media (max-width: 360px) {
			width: 100%;
			height: 40%;
		}
	`,

	Profile: styled.div`
		position: relative;
		display: grid;
		grid-template-rows: 1fr 1fr;
		margin-left: auto;
		margin-right: auto;
		height: auto;
	`,

	ProfileImgBox: styled.div`
		width: 80%;
		height: 0;
		padding-top: 50%;
		position: relative;
		margin-left: auto;
		margin-right: auto;
		margin-top: auto;
		margin-bottom: auto;
	`,

	ProfileImg: styled.img`
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
	`,

	NickName: styled.div`
		position: relative;
		font-size: 1rem;
		text-align: center;
		line-height: 60px;
		@media (max-width: 768px) {
			font-size: 1rem;
		}
		@media (max-width: 640px) {
			font-size: 1rem;
		}
	`,

	ContentBox: styled.form`
		position: relative;
		display: grid;
		grid-template-rows: auto auto;
		width: auto;
		height: auto;
		padding-top: 5%;
		padding-bottom: 10%;
		text-align: center;
		@media (max-width: 535px) {
			padding-bottom: 15%;
		}
	`,

	Content: styled.div`
		flex-wrap: wrap;
		position: relative;
		width: auto;
		height: auto;
		padding: 1%;
		font-size: 1.4rem;
		line-height: 100px;
		@media (max-width: 768px) {
			font-size: 20px;
			line-height: 130px;
		}
		@media (max-width: 640px) {
			font-size: 15px;
			line-height: 130px;
		}
	`,

	ContentInput: styled.textarea`
		width: 100%;
		height: 80px;
		@media (max-width: 535px) {
			height: 50px;
		}
	`,

	ContentWrapper: styled.div`
		position: relative;
		width: auto;
		height: auto;
		cursor: pointer;
	`,

	UserLocationWrapper: styled.div`
		width: auto;
		height: auto;
		font-size: 0.8rem;
	`,

	HashTagWrapper: styled.div`
		width: 100%;
		height: auto;
		border-radius: 6px;
		// border: 1px gray solid;
	`,

	BtnBox: styled.div`
		position: relative;
		width: 60%;
		height: 100%;
		margin-left: auto;
		margin-right: auto;
		margin-top: 15%;
		margin-bottom: 15%;
		@media (max-width: 470px) {
			width: 60%;
		}
	`,

	BtnWrapper: styled.div`
		position: relative;
		height: 0;
		width: 100%;
		padding-top: 150%;
		margin-left: auto;
		margin-right: auto;
		@media (max-width: 520px) {
			padding-top: 250%;
		}
	`,
	Star: styled.div`
		text-align: center;
		weight: 100%;
	`,

	StarText: styled.span`
		color: #ffba34;
	`,
	BtnOne: styled.div`
	  position: absolute;
	  top: 0;
	  height: 33.33%;
	  width: 100%;
	  .delete-button {
	    cursor: pointer;
	    color: gray;
	  }
	    @media (max-width: 600px) {
	      font-size: 0.7rem;
	    }
	    @media (max-width: 520px) {
	      font-size: 0.7rem;
	      padding-right: 20%;
	      padding-left: 20%;
	      height: 120%;
	    }
	    @media (max-width: 360px) {
	      font-size: 0.7rem;
	      padding-right: 15%;
	      padding-left: 15%;
	      height: 120%;
	    }
	  }
	`,

	BtnTwo: styled.div`
		position: absolute;
		bottom: 0;
		height: 33.33%;
		width: 100%;
		margin-bottom: 40%;
		> button {
			cursor: pointer;
			font-size: 0.8rem;
			padding-top: 12%;
			padding-bottom: 12%;
			padding-right: 12%;
			padding-left: 12%;
			text-align: center;
			position: relative;
			color: #ffffff;
			height: 100%;
			width: 100%;
			border: none;
			border-radius: 20px;
			background-color: #3a6fb0;
			:hover {
				background-color: #2f4d6f;
				transition: all 0.5s ease;
				border-radius: 20px;
				// transform: scale(1.1);
			}
			:active {
				// transform: scale(1.1);
			}
			@media (max-width: 600px) {
				font-size: 0.7rem;
			}
			@media (max-width: 520px) {
				font-size: 0.7rem;
				padding-right: 20%;
				padding-left: 20%;
				height: 120%;
			}
			@media (max-width: 360px) {
				font-size: 0.7rem;
				padding-right: 15%;
				padding-left: 15%;
				height: 120%;
			}
		}
	`,

	ReviewContainer: styled.div`
		/* border-bottom: 2px solid grey; */
		font-size: 14px;
		padding: 0 5px 0 5px;
		margin-bottom: 10px;
		word-break: keep-all;
	`,
	ContentEmpty: styled.div`
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		color: black;
		font-size: 3rem;
		/* margin-right: auto;
		margin-left: auto; */
		/* margin-top: 180px; */
		font-weight: bold;
		> img {
			justify-content: center;
			/* width: 100%; */
		}
		.blur {
			filter: blur(6px);
		}
		.imtext {
			z-index: 1;
			position: absolute;
			font-size: 30px;
			height: 100px;
		}
	`,
}
