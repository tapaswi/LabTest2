describe('sign in controller', function() {
	var SignInController,
    $httpBackend;

beforeEach(module('TravelDiary'));
beforeEach(inject(function(_SignInController_, _$httpBackend_) {
    SignInController = _SignInController_;
    $httpBackend = _$httpBackend_;
}));

describe('post method', inject(function(_$q_) {

    var deferred = _$q_.defer();
    deferred.resolve({success: true});
    spyOn(SignInController,'post').andReturn(deferred.promise);

    it('post correctly', function() {
        SignInController.post(100).then(function(response){
            expect(response.success).toEqual(true);
        });

    });

}));
});