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
              <label htmlFor="email1" className="label">
                Email address
              </label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  id="email1"
                  placeholder="Enter email"
                />
              </div>
              <p className="help text-muted">
                We'll never share your email with anyone else.
              </p>
            </div>
            <div className="field">
              <label htmlFor="password1" className="label">
                Password
              </label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  id="password1"
                  placeholder="Enter Password"
                />
              </div>
            </div>
            <button className="button is-primary">Submit</button>
          </BoxWrapper>

          <BoxWrapper>
            <Title>Horizontal Form</Title>
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label htmlFor="email2" classNameName="label">
                  Email
                </label>
              </div>

              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      id="email2"
                      placeholder="Enter email"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div class="field-label is-normal">
                <label htmlFor="password2" className="label">
                  Password
                </label>
              </div>

              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <input
                      className="input"
                      type="password"
                      id="password2"
                      placeholder="Enter password"
                    />
                  </div>
                </div>
              </div>
            </div>

            <button className="button is-primary">Submit</button>
          </BoxWrapper>
        </div>

        <div className="column">
          <BoxWrapper>
            <Title>Basic Form</Title>

            <div className="columns is-mobile">
              <div className="column">
                <div className="field">
                  <label htmlFor="email3" className="label">
                    Email
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      id="email3"
                      placeholder="Enter email"
                    />
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="field">
                  <label htmlFor="password3" className="label">
                    Password
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type="password"
                      id="password3"
                      placeholder="Enter Password"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="field">
              <label htmlFor="address" className="label">
                Address
              </label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  id="address"
                  placeholder="Dhaka, Bangladesh - 1212"
                />
              </div>
            </div>

            <button class="button is-primary">Submit</button>
          </BoxWrapper>
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
