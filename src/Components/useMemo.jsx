import React, { useState, useMemo } from 'react';


const UseMemo = () => {
	const [words, setWords] = useState([]);
  	const [word, setWord] = useState('');

	const handleClick = () => {
		setWords([...words, word]);	// words에 word 추가
		setWord('');
	};

	return (
		<>
			<h1>useMemo 테스트 페이지</h1>
			<div>
				<UnsortedWords words={words} />
				<SortedWords words={words} />
			</div>
			<input
				value={word}
				onChange={({ target: { value } }) => setWord(value)}
				placeholder="word"
			/>
			<button onClick={handleClick}>+</button>
		</>
	);
};

export default UseMemo;

// 배열을 정렬하지 않고 뿌려준다.
const UnsortedWords = ({ words }) => {
	return (
		<>
			<h2>---Unsorted Words---</h2>
			{
				words.map((word, index) => {
					return <p key={index}>{word}</p>
				})
			}
		</>
	);
};

// 일부로 delay를 줘서 느리게 만든 컴포넌트 (배열을 정렬해서 뿌려준다)
const SortedWords = ({ words }) => {
	const delay = (ms) => {
		const now = new Date().getTime();
		while (new Date().getTime() < now + ms) {}
	}

	const sortWords = () => {
		delay(500);
		return words.sort();
	};
	// const sortedWords = sortWords(); // 기존 코드
	const sortedWords = useMemo(sortWords, [words]); // useMemo사용 코드
	/* words 가 변경 될때만 호출이 되고 동일할때는 최도 호출 결과가 계속해서 재사용된다. */
  
	return (
		<>
			<h2>---Sorted Words---</h2>
			<ul>
			{sortedWords.map((word, idx) => (
				<li key={idx}>{word}</li>
			))}
			</ul>
		</>
	);
}
  
