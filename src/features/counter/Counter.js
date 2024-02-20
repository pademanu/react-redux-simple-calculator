import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  calculate,
  selectCount,
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [firstNum, setFirstNum] = useState('2');
  const [secondtNum, setSecondtNum] = useState('3');
  const [operation, setOperation] = useState('sum');

  const firstValue = Number(firstNum) || 0;
  const secondValue = Number(secondtNum) || 0;

  return (
    <div>
      <div>
        <label htmlFor='operators'>Select operator</label>
      </div>
      <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={firstNum}
          onChange={(e) => setFirstNum(e.target.value)}
        />
        <select 
          name='operators' 
          className={styles.button}
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
        >
          <option value='sum'>+</option>
          <option value='res'>-</option>
          <option value='multiplication'>x</option>
          <option value='division'>/</option>
        </select>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={secondtNum}
          onChange={(e) => setSecondtNum(e.target.value)}
        />
      <div className={styles.row}>
        <button
          className={styles.button}
          onClick={() => dispatch(calculate({firstValue, secondValue, operation}))}
        >
          Calculate
        </button>
      </div>
      <div className={styles.row}>
        <span className={styles.value}>{count}</span>
      </div>
    </div>
  );
}
