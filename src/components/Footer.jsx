import React, { Component } from 'react';

class Footer extends Component {
    // state = {  }
    render() { 
        return (
          <React.Fragment>
            <footer className="bg_secondary_light text-white">
              <div className="container">
                <div className="text-center py-2">
                  Copyright &copy; 2020. Healthcare360. <br /> Powered by
                  BuildforsdGCohort2-team-140-A
                </div>
              </div>
            </footer>
          </React.Fragment>
        );
    }
}
 
export default Footer;