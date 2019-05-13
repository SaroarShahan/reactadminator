import React from 'react';
import styled from 'styled-components';
import BoxWrapper from '../../common/BoxWrapper';

const FormsContainer = () => {
  return (
    <>
      <div className="columns is-mobile">
        <div className="column">
          <BoxWrapper>
            <Title>Basic Form</Title>
            <div className="field">
              <label htmlFor="email" className="label">
                Email address
              </label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  id="email"
                  placeholder="Enter email"
                />
              </div>
              <p className="help text-muted">
                We'll never share your email with anyone else.
              </p>
            </div>
            <div className="field">
              <label htmlFor="password" className="label">
                Password
              </label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  id="password"
                  placeholder="Enter Password"
                />
              </div>
            </div>
            <button class="button is-primary">Submit</button>
          </BoxWrapper>

          <BoxWrapper>
            <Title>Horizontal Form</Title>
            <div className="field is-horizontal">
              <div class="field-label is-normal">
                <label htmlFor="email" className="label">
                  Email
                </label>
              </div>

              <div class="field-body">
                <div class="field">
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      id="email"
                      placeholder="Enter email"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div class="field-label is-normal">
                <label htmlFor="password" className="label">
                  Password
                </label>
              </div>

              <div class="field-body">
                <div class="field">
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      id="password"
                      placeholder="Enter password"
                    />
                  </div>
                </div>
              </div>
            </div>

            <button class="button is-primary">Submit</button>
          </BoxWrapper>
        </div>

        <div className="column">
          <BoxWrapper>dfadfasdfasf</BoxWrapper>
        </div>
      </div>
    </>
  );
};

export default FormsContainer;

const Title = styled.h3`
  color: #313435;
  font-weight: 700;
  margin-bottom: 1rem;
`;
