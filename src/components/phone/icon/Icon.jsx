import styles from './css/style.module.css';

export default function IconPhone({atr}) {
  return (
    <div className={styles.wrapper}>
        <svg className={styles[atr]} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.8534 11.2292L12.525 10.9633C12.2513 10.9312 11.9738 10.9615 11.7134 11.052C11.453 11.1425 11.2165 11.2908 11.0217 11.4858L9.33503 13.1725C6.73279 11.849 4.61767 9.73391 3.2942 7.13167L4.99003 5.43583C5.3842 5.04167 5.5767 4.49167 5.51253 3.9325L5.2467 1.6225C5.19473 1.17533 4.98013 0.762884 4.64375 0.463695C4.30737 0.164505 3.87272 -0.000533734 3.42253 1.2968e-06H1.8367C0.800868 1.2968e-06 -0.0607993 0.861668 0.00336735 1.8975C0.489201 9.72583 6.75003 15.9775 14.5692 16.4633C15.605 16.5275 16.4667 15.6658 16.4667 14.63V13.0442C16.4759 12.1183 15.7792 11.3392 14.8534 11.2292Z" fill="white"/>
        </svg>
    </div>
  )
} 