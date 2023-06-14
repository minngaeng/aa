import { BlueButton, RedInput } from './BoardWrite.styles';

export default function BoardWriteUI(props) {
  return (
    <div>
      <div>@@@@@@@@@여기는 프리젠터 입니다.@@@@@@</div>
      <div>
        {/* 작성자: <input type="text" onChange={onChangeWriter} /> */}
        작성자: <RedInput type="text" onChange={props.bbb} />
        {/* 제목: <input type="text" onChange={onChangeTitle} /> */}
        제목: <input type="text" onChange={props.ccc} />
        {/* 내용: <input type="text" onChange={onChangeContents} /> */}
        내용: <input type="text" onChange={props.ddd} />
        {/* <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>; */}
        <BlueButton onClick={props.aaa}>GRAPHQL-API 요청하기</BlueButton>;
      </div>
      <div>@@@@@@@@@여기는 프리젠터 입니다.@@@@@@</div>
    </div>
  );
}
