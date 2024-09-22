export function nutriscorePresent(nutriscore_grade: string | null | undefined) {
   if (!nutriscore_grade) return false;

   const nutriscoreGrade = nutriscore_grade?.toLowerCase();
   const isNutriScoreGradePresent =
      nutriscoreGrade === "a" ||
      nutriscoreGrade === "b" ||
      nutriscoreGrade === "c" ||
      nutriscoreGrade === "d" ||
      nutriscoreGrade === "e";

   return isNutriScoreGradePresent;
}
