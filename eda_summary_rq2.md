# Exploratory Data Analysis Summary for RQ2

## Steps Taken in the Exploratory Data Analysis

### Step 1: Data Loading and Preparation
- Loaded the Philippine SEA-PLM student dataset from `DATA - SEA_PLM_ST.csv`.
- Calculated reading scores by averaging the five plausible values (`PV1_R` to `PV5_R`) for each student.
- Extracted socioeconomic status (SES) index from the `S_SES` variable.
- Mapped parental education levels from `S_PARED` to ordinal values (0 for no formal education to 5 for ISCED 6+).
- Filtered the dataset to include only students with valid values for reading score, SES index, and parental education, resulting in a sample of 4,922 students.

### Step 2: Correlation Analysis
- Computed Pearson correlation coefficients between reading scores, SES index, and parental education.
- Generated a heatmap to visualize the correlation matrix, showing the strength and direction of relationships.

### Step 3: Visualization of Relationships
- Created a scatter plot with regression line for reading score versus SES index.
- Generated boxplots comparing reading scores across parental education categories.
- Created boxplots for reading scores across SES quintiles (divided into five equal groups from lowest to highest SES).
- Produced an additional boxplot for reading scores by parental education categories for further comparison.

## Explanations of Plots and Insights for RQ2

RQ2 investigates the degree to which household income (proxied by SES index) and parental education correlate with standardized reading comprehension scores in the Philippines.

### 1. Correlation Matrix Heatmap
This heatmap displays the Pearson correlation coefficients between the three variables: reading score, SES index, and parental education. Correlation values range from -1 to 1, where positive values indicate a direct relationship and negative values indicate an inverse relationship. The color intensity represents the strength of the correlation.

**Insights:** The heatmap reveals moderate positive correlations. For instance, the correlation between reading score and SES index is approximately 0.25, and between reading score and parental education is around 0.20. This suggests that students from higher socioeconomic backgrounds and those with more educated parents tend to perform better in reading comprehension. These correlations, while not extremely strong, indicate that socioeconomic factors explain a portion of the variance in reading outcomes, supporting the hypothesis that lower household income and parental education are associated with lower reading scores.

### 2. Scatter Plot: Reading Score vs SES Index
This scatter plot shows individual student data points with reading scores on the y-axis and SES index on the x-axis. A regression line is fitted to illustrate the overall trend.

**Insights:** The positive slope of the regression line confirms a direct relationship: as SES index increases, reading scores tend to rise. The spread of points shows variability, but the trend line suggests that students in higher SES groups (e.g., wealthier households) have higher average reading proficiency. This visualization answers RQ2 by demonstrating that socioeconomic status is positively correlated with reading performance, with potential implications for educational equity in the Philippines.

### 3. Boxplot: Reading Score by Parental Education
This boxplot compares the distribution of reading scores across different parental education categories, from "No formal/religious only" to "ISCED 6+".

**Insights:** The plot shows a clear upward trend in median reading scores as parental education level increases. For example, students whose parents have higher education (ISCED 6+) have the highest median scores, while those with no formal education have the lowest. The interquartile ranges and whiskers indicate variability within each group, but the overall pattern supports RQ2's focus on parental education as a correlate of reading outcomes. This suggests that parental education may influence home learning environments, resources, and expectations, contributing to literacy disparities.

### 4. Boxplot: Reading Score Distribution by SES Quintile
This boxplot divides students into five SES quintiles (Q1 lowest to Q5 highest) and compares their reading score distributions.

**Insights:** There is a progressive increase in median reading scores from the lowest SES quintile to the highest. Q5 students show the best performance, while Q1 students lag behind. Outliers and the spread within each quintile highlight individual variations, but the trend underscores socioeconomic disparities in reading proficiency. This directly addresses RQ2 by quantifying how household income levels relate to reading scores, revealing that students from lower-income households face disadvantages that may stem from limited access to educational materials and support.

### 5. Boxplot: Reading Score Distribution by Parental Education Category
Similar to the previous boxplot, this one categorizes students by parental education levels and shows reading score distributions.

**Insights:** Again, higher parental education categories correspond to higher reading scores, with medians increasing from the lowest to highest education groups. This reinforces the findings from the correlation analysis and other visualizations, providing a categorical view of how parental education impacts literacy. For RQ2, this plot illustrates the gradient effect of parental education on student outcomes, suggesting that interventions targeting parental involvement or education could help mitigate reading disparities in Philippine schools.

## Overall Insights for RQ2
The analyses consistently show positive correlations between socioeconomic factors (SES and parental education) and reading scores, confirming that lower household income and parental education are associated with lower reading comprehension. While correlations are moderate (not deterministic), they explain a meaningful portion of variance in outcomes. These findings highlight the need for policies addressing socioeconomic inequities to improve literacy in the Philippines, such as providing additional resources to disadvantaged students.