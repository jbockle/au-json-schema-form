define(["require", "exports", "aurelia-pal", "../../constants/inputs"], function (require, exports, aurelia_pal_1, inputs_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rootPath = "./templates/bootstrap4";
    function configure(config) {
        config.globalResources([
            // resources
            aurelia_pal_1.PLATFORM.moduleName(rootPath + "/resources/guid"),
        ]
            // inputs
            .concat(getInputs()));
    }
    exports.configure = configure;
    function getInputs() {
        return Object.keys(inputs_1.Inputs.controls).map(function (key) {
            return aurelia_pal_1.PLATFORM.moduleName(rootPath + "/inputs/" + key + "/" + inputs_1.Inputs.controls[key]);
        });
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlcy9ib290c3RyYXA0L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUlBLElBQU0sUUFBUSxHQUFHLHdCQUF3QixDQUFDO0lBRTFDLG1CQUEwQixNQUE4QjtRQUV0RCxNQUFNLENBQUMsZUFBZSxDQUNwQjtZQUNFLFlBQVk7WUFDWixzQkFBUSxDQUFDLFVBQVUsQ0FBSSxRQUFRLG9CQUFpQixDQUFDO1NBQ2xEO1lBQ0MsU0FBUzthQUNSLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQVRELDhCQVNDO0lBRUQ7UUFDRSxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQUc7WUFDMUMsT0FBTyxzQkFBUSxDQUFDLFVBQVUsQ0FBSSxRQUFRLGdCQUFXLEdBQUcsU0FBSSxlQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBRyxDQUFDLENBQUM7UUFDbEYsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDIiwiZmlsZSI6InRlbXBsYXRlcy9ib290c3RyYXA0L2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUExBVEZPUk0gfSBmcm9tIFwiYXVyZWxpYS1wYWxcIjtcbmltcG9ydCB7IEZyYW1ld29ya0NvbmZpZ3VyYXRpb24gfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcbmltcG9ydCB7IElucHV0cyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvaW5wdXRzXCI7XG5cbmNvbnN0IHJvb3RQYXRoID0gXCIuL3RlbXBsYXRlcy9ib290c3RyYXA0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoY29uZmlnOiBGcmFtZXdvcmtDb25maWd1cmF0aW9uKSB7XG5cbiAgY29uZmlnLmdsb2JhbFJlc291cmNlcyhcbiAgICBbXG4gICAgICAvLyByZXNvdXJjZXNcbiAgICAgIFBMQVRGT1JNLm1vZHVsZU5hbWUoYCR7cm9vdFBhdGh9L3Jlc291cmNlcy9ndWlkYCksXG4gICAgXVxuICAgICAgLy8gaW5wdXRzXG4gICAgICAuY29uY2F0KGdldElucHV0cygpKSk7XG59XG5cbmZ1bmN0aW9uIGdldElucHV0cygpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKElucHV0cy5jb250cm9scykubWFwKChrZXkpID0+IHtcbiAgICByZXR1cm4gUExBVEZPUk0ubW9kdWxlTmFtZShgJHtyb290UGF0aH0vaW5wdXRzLyR7a2V5fS8ke0lucHV0cy5jb250cm9sc1trZXldfWApO1xuICB9KTtcbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
