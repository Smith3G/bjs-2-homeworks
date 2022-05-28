function parseCount(value) {
let result = Number.parseInt(value);
if (isNaN(result)) {
        const divideError = new Error("Невалидное значение");
        throw divideError;
};
 return result;
}

function validateCount(value) {

        try {

                return parseCount(value);
        } catch (error) {
                return error;
        };
};

class Triangle {
        constructor(a, b, c) {
                this.a = a;
                this.b = b;
                this.c = c;

       if ((a + b) < c || (a + c) < b || (c + b) < a) {
        throw new Error("Треугольник с такими сторонами не существует");

         };
   };

      getPerimeter() {
              const sum = this.a + this.b + this.c;
              return sum;
      };

      getArea() {
              const p = (this.getPerimeter()) / 2;
              const area = Math.sqrt((p * (p - this.a) * (p - this.b) * (p - this.c)));
              return +area.toFixed(3);
      };
}

function getTriangle (a, b, c) {

        try {
                return new Triangle(a, b, c);
               } catch (error) {
                   return new class Errors {
                    getArea = () => 'Ошибка! Треугольник не существует';
                    getPerimeter = () => 'Ошибка! Треугольник не существует';
                   };
               };
}