import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import axios from "axios";
// import { useSelector } from "react-redux";
import {
  ReviewBody,
  ReviewShopName,
  ReviewInputText,
  ReviewThumbnail,
  ReviewLabelButton,
  ReviewSubmitButtonDiv,
} from "./Review.style";

const createArray = (length) => [...Array(length)];

const Star = ({ selected = false, handleSelect = (f) => f }) => {
  return (
    <FaStar
      color={selected ? "orange" : "grey"}
      onClick={handleSelect}
      style={{ width: 30, height: 30 }}
    />
  );
};

export default function Review({ history, match }) {
  const [selectedStar, setSelectedStar] = useState(0);
  const [inputText, setInputText] = useState("");
  const [uploadImage, setUploadImage] = useState([]);
  const [thumbnailImage, setThumbnailImage] = useState([]);

  const [shopName, setShopName] = useState("");

  const handleInputText = (e) => {
    setInputText(e.target.value);
  };

  const deleteImage = (idx) => {
    if (window.confirm("해당 사진을 업로드 취소하시겠습니까?")) {
      setThumbnailImage([
        ...thumbnailImage.slice(0, idx),
        ...thumbnailImage.slice(idx + 1),
      ]);
    }
  };

  const onImageChange = (e) => {
    setThumbnailImage([
      ...thumbnailImage,
      URL.createObjectURL(e.target.files[0]),
    ]);
    setUploadImage([...uploadImage, e.target.files[0]]);
  };
  // 별점은 있어야
  const uploadReview = () => {
    if (selectedStar === 0) {
      alert("평점을 선택해주세요.");
      return;
    }
    const reviewData = new FormData();
    reviewData.append("star", selectedStar);
    reviewData.append("comment", inputText);
    reviewData.append("shop_id", match.params.shop_id);
    uploadImage.map((item) => {
      return reviewData.append("img", item);
    });

    axios
      .post("https://localhost:4000/reviews", reviewData, {
        headers: {
          authorization: localStorage.getItem("accessToken"),
        },
      })
      .then((res) => {
        console.log(res);
        alert("리뷰 작성이 완료되었습니다.");
        window.location.replace(`/shopdetail/${match.params.shop_id}`);
      });
  };

  // useEffect(() => {
  //   console.log(`리뷰 남길 가게 id = ${match.params.shop_id}`);
  //   console.log(`평점 : ${selectedStar}`);
  // }, [selectedStar, thumbnailImage]);

  useEffect(() => {
    axios
      .get(`https://localhost:4000/shops/${match.params.shop_id}`)
      .then((res) => {
        setShopName(res.data.data.targetshop.shop_name);
      });
  }, []);

  return (
    <ReviewBody>
      <div>
        <ReviewShopName>{shopName}</ReviewShopName>에 대한 리뷰를 작성해주세요.
      </div>
      <div style={{ marginBottom: 10, marginTop: 10 }}>
        {createArray(5).map((item, idx) => {
          return (
            <Star
              key={idx}
              selected={selectedStar > idx}
              handleSelect={() => {
                setSelectedStar(idx + 1);
              }}
            />
          );
        })}
      </div>
      <ReviewInputText onChange={handleInputText} />
      <div style={{ marginTop: 10, fontWeight: "bold" }}>사진 업로드</div>
      <ReviewThumbnail>
        {thumbnailImage.map((item, idx) => {
          return <img key={idx} src={item} onClick={() => deleteImage(idx)} />;
        })}
        <ReviewLabelButton htmlFor="upload_file">+</ReviewLabelButton>
        <input
          type="file"
          id="upload_file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={onImageChange}
        />
      </ReviewThumbnail>
      <ReviewSubmitButtonDiv>
        <button
          className="cancel"
          onClick={() => {
            if (window.confirm("리뷰 작성을 취소하시겠습니까?")) {
              window.location.replace(`/shopdetail/${match.params.shop_id}`);
            }
          }}
        >
          취소
        </button>
        <button className="submit" onClick={uploadReview}>
          리뷰 올리기
        </button>
      </ReviewSubmitButtonDiv>
    </ReviewBody>
  );
}
