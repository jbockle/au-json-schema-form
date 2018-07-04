export function numberPolyfill() {
    Number.isInteger = Number.isInteger || ((value) => {
        return typeof value === "number" &&
            isFinite(value) &&
            Math.floor(value) === value;
    });
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9udW1iZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsTUFBTTtJQUNKLE1BQU0sQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7UUFDaEQsT0FBTyxPQUFPLEtBQUssS0FBSyxRQUFRO1lBQzlCLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDZixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssQ0FBQztJQUNoQyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMiLCJmaWxlIjoicmVzb3VyY2VzL251bWJlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGZ1bmN0aW9uIG51bWJlclBvbHlmaWxsKCkge1xuICBOdW1iZXIuaXNJbnRlZ2VyID0gTnVtYmVyLmlzSW50ZWdlciB8fCAoKHZhbHVlKSA9PiB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIiAmJlxuICAgICAgaXNGaW5pdGUodmFsdWUpICYmXG4gICAgICBNYXRoLmZsb29yKHZhbHVlKSA9PT0gdmFsdWU7XG4gIH0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==