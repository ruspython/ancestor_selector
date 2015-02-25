(function ($) {
    describe("Dependencies", function () {
        it("should have jQuery", function () {
            expect(window.$).toBeDefined();
        });
    });
    describe("Validator", function () {
        it("should throw exception on non-valid selectors", function () {
            expect(function () {
                $('body').ancestors('some string');
            }).toThrow(new Error('Selector is not valid'));
            expect(function () {
                $('body').ancestors('');
            }).toThrow(new Error('Selector is not valid'));
        });
    });
    describe("Ancestor selector", function () {
        it("should return #d1, #d4 on '.a > .x < .b'", function () {
            var testedAncestors = $('body').ancestors('.a > .x < .b'),
                realAncestors = $('#d1, #d4');

            expect(testedAncestors.length).toBe(realAncestors.length);
        });
        it("should return 0 elements on '.a > #d4'", function () {
            var testedAncestors = $('body').ancestors('.a > #d4');
            expect(testedAncestors.length).toBe(0);
        });
        it("should have d3 id on '.a > .y'", function () {
            var testedAncestors = $('body').ancestors('.a > .y');
            expect(testedAncestors[0].id).toBe('d3');
        });
        it("should return 'a' class on '.a > '", function () {
            var testedAncestors = $('body').ancestors('.a > '),
                realAncestors = $('.a');
            expect(testedAncestors.length).toBe(realAncestors.length);
        });
        it("should return root element, if begins with < or >", function () {
            var testedAncestors = $('body').ancestors(' > .y');
            expect(testedAncestors.length).toBe($(document.documentElement).find('.y').parent().length);
        });
        it("should return root element, if there is the only sign >", function () {
            var testedAncestors = $('body').ancestors('>');
            expect(testedAncestors.length).toBe($(document.documentElement).length);
        });
    });
}(jQuery));