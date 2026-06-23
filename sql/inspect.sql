-- Query to count the number of test cases by function
SELECT func, COUNT(*) as num_cases 
FROM survival_tests 
GROUP BY func;

-- Query to view a sample of 5 cases
SELECT id, func, args_json, expected_json 
FROM survival_tests 
LIMIT 5;
