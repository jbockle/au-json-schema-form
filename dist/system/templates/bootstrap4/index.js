System.register(["aurelia-pal", "../../constants/inputs"], function (exports_1, context_1) {
    "use strict";
    var aurelia_pal_1, inputs_1, rootPath;
    var __moduleName = context_1 && context_1.id;
    function configure(config) {
        config.globalResources([
            // resources
            aurelia_pal_1.PLATFORM.moduleName(rootPath + "/resources/guid"),
        ]
            // inputs
            .concat(getInputs()));
    }
    exports_1("configure", configure);
    function getInputs() {
        return Object.keys(inputs_1.Inputs.controls).map(function (key) {
            return aurelia_pal_1.PLATFORM.moduleName(rootPath + "/inputs/" + key + "/" + inputs_1.Inputs.controls[key]);
        });
    }
    return {
        setters: [
            function (aurelia_pal_1_1) {
                aurelia_pal_1 = aurelia_pal_1_1;
            },
            function (inputs_1_1) {
                inputs_1 = inputs_1_1;
            }
        ],
        execute: function () {
            rootPath = "./templates/bootstrap4";
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlcy9ib290c3RyYXA0L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7SUFNQSxtQkFBMEIsTUFBOEI7UUFFdEQsTUFBTSxDQUFDLGVBQWUsQ0FDcEI7WUFDRSxZQUFZO1lBQ1osc0JBQVEsQ0FBQyxVQUFVLENBQUksUUFBUSxvQkFBaUIsQ0FBQztTQUNsRDtZQUNDLFNBQVM7YUFDUixNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzVCLENBQUM7O0lBRUQ7UUFDRSxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQUc7WUFDMUMsT0FBTyxzQkFBUSxDQUFDLFVBQVUsQ0FBSSxRQUFRLGdCQUFXLEdBQUcsU0FBSSxlQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBRyxDQUFDLENBQUM7UUFDbEYsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7Ozs7OztZQWpCSyxRQUFRLEdBQUcsd0JBQXdCLENBQUM7UUFrQjFDLENBQUMiLCJmaWxlIjoidGVtcGxhdGVzL2Jvb3RzdHJhcDQvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQTEFURk9STSB9IGZyb20gXCJhdXJlbGlhLXBhbFwiO1xuaW1wb3J0IHsgRnJhbWV3b3JrQ29uZmlndXJhdGlvbiB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xuaW1wb3J0IHsgSW5wdXRzIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50cy9pbnB1dHNcIjtcblxuY29uc3Qgcm9vdFBhdGggPSBcIi4vdGVtcGxhdGVzL2Jvb3RzdHJhcDRcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShjb25maWc6IEZyYW1ld29ya0NvbmZpZ3VyYXRpb24pIHtcblxuICBjb25maWcuZ2xvYmFsUmVzb3VyY2VzKFxuICAgIFtcbiAgICAgIC8vIHJlc291cmNlc1xuICAgICAgUExBVEZPUk0ubW9kdWxlTmFtZShgJHtyb290UGF0aH0vcmVzb3VyY2VzL2d1aWRgKSxcbiAgICBdXG4gICAgICAvLyBpbnB1dHNcbiAgICAgIC5jb25jYXQoZ2V0SW5wdXRzKCkpKTtcbn1cblxuZnVuY3Rpb24gZ2V0SW5wdXRzKCkge1xuICByZXR1cm4gT2JqZWN0LmtleXMoSW5wdXRzLmNvbnRyb2xzKS5tYXAoKGtleSkgPT4ge1xuICAgIHJldHVybiBQTEFURk9STS5tb2R1bGVOYW1lKGAke3Jvb3RQYXRofS9pbnB1dHMvJHtrZXl9LyR7SW5wdXRzLmNvbnRyb2xzW2tleV19YCk7XG4gIH0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==
