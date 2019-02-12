$(function () {

    // Init tabs
    $('#tabs').mobiscroll().nav({
        onItemTap: function (event) {
            $('.app-tab-active').removeClass('app-tab-active');
            $('#tab-' + event.target.getAttribute('data-tab')).addClass('app-tab-active');
        }
    });

    // Home
    // -------


    $('#home-calendar').mobiscroll().calendar();

    // Set today
    $('#home-calendar').mobiscroll('setVal', new Date(), true);

    $('#home-todo').mobiscroll().listview({
        sortable: {
            handle: 'left'
        },
        stages: {
            left: [{
                key: 'stage1',
                icon: 'plus',
                color: '#31c6e7',
                text: 'Add',
                action: function (event, inst) {
                    inst.add(null, '<input type="checkbox">New Todo', event.index + 1);
                }
            }],
            right: [{
                key: 'stage2',
                color: '#009688',
                text: 'Remove',
                icon: 'remove',
                action: function (event, inst) {
                    inst.remove(event.target);
                    return false;
                }
            }]
        }
    });

    // -------


    // Settings
    // -------

    $('#settings-pin').mobiscroll().numpad({
        template: 'dddd',
        allowLeadingZero: true,
        placeholder: '-',
        mask: '*',
        validate: function (event) {
            return {
                invalid: event.values.length != 4
            };
        }
    });

    // On notification switch change enable / disable the select
    $('#settings-notify').on('change', function () {
        $('.settings-notify').prop('disabled', !this.checked);
    });

    // -------


    // Profile
    // -------

    var now = new Date();

    $('#profile-birthday').mobiscroll().date({
        max: new Date(now.getFullYear() - 18, 11, 31)
    });

    $('#profile-language').mobiscroll().select();

    // -------

});
